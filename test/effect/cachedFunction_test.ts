import { assertEquals } from "assert";
import { Effect, pipe } from "npm:effect";

const ten = (n: number) => Effect.succeed(n + 1);

const tenMemo = Effect.cachedFunction(ten);

const prog = pipe(
  tenMemo,
  Effect.flatMap((f) => f(10))
);

const result = Effect.runSync(prog);

Deno.test("Effect.cached", () => {
  assertEquals(result, 11);
});
