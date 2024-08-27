import { assertEquals } from "assert";
import { Effect, Iterable } from "npm:effect";


const fun1 = (a: number): Effect.Effect<number, string> =>
  a > 10 ? Effect.fail("a is greater than 10") : Effect.succeed(a);

const prog = Effect.partition(Iterable.range(1, 20), fun1);

const [_, success] = Effect.runSync(prog);

Deno.test("Effect.partition", () => {
  assertEquals(success, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
