import { assertEquals } from "assert";
import { Effect, pipe } from "npm:effect";

const ten = (n: number) => Effect.succeed(n + 1);

const prog = pipe(
  ten(10),
  Effect.cached,
  Effect.flatMap((n) => n)
);

const result = Effect.runSync(prog);

Deno.test("Effect.cached", () => {
  assertEquals(result, 11);
});
