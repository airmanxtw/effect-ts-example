import { assertEquals } from "assert";
import { Effect, pipe } from "npm:effect";

const A1 = Effect.succeed(1);
const A2 = Effect.succeed(2);

const prog = pipe(
  A1,
  Effect.zipWith(A2, (a, b) => a + b)
);

const result = Effect.runSync(prog);

Deno.test("Effect.zipWith", () => {
  assertEquals(result, 3);
});
