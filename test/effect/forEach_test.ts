import { assertEquals } from "assert";
import { Effect, pipe } from "npm:effect";

const double = (n: number, i: number) => Effect.succeed(n * 2 + i);
const numbers = Effect.succeed([1, 2, 3]);

const toDouble = pipe(numbers, Effect.flatMap(Effect.forEach(double)));
const prog = Effect.runSync(toDouble);
Deno.test("Effect.forEach", () => {
  assertEquals(prog, [2, 5, 8]);
});
