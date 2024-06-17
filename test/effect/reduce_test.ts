import { assertEquals } from "assert";
import { pipe } from "npm:effect/Function";
import { Effect, Option, ReadonlyArray } from "npm:effect";

const sum = (n: number[]) => Effect.reduce(0, (acc, n: number) => Effect.succeed(acc + n))(n);

const result = Effect.runSync(sum([1, 2, 3]));

Deno.test("reduce test", () => {
  assertEquals(result, 6);
});

const appendArray = (n: number[]) => (v: number) => ReadonlyArray.append(n, v);

const appendOneToArray = (n: number[]) => Option.some(appendArray(n)(1));

const arraySum = (n: number, m: number) => (d: number[]) =>
  Option.all([ReadonlyArray.get(d, n - 1), ReadonlyArray.get(d, m - 1)])
    .pipe(Option.map(([a, b]) => a + b))
    .pipe(Option.andThen(appendArray(d)));

// * Fibonacci
const fib = (n: number) =>
  pipe(
    ReadonlyArray.range(1, n),
    Effect.reduce(ReadonlyArray.empty<number>(), (acc: number[], index: number) =>
      Effect.if(index > 2, {
        onTrue: arraySum(index - 1, index - 2)(acc),
        onFalse: appendOneToArray(acc),
      })
    ),
    Effect.flatMap(ReadonlyArray.last)
  );

const fibResult = Effect.runSync(fib(6));

Deno.test("Fibonacci test", () => {
  assertEquals(fibResult, 8);
});
