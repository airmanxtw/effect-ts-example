import { assertEquals } from "assert";
import { Effect, Exit, Cause } from "npm:effect";

const add = (x: number, y: number): Effect.Effect<number, string> =>
  x > 0 && y > 0 ? Effect.succeed(x + y) : Effect.fail("error");

const run = Effect.gen(function* () {
  const a = yield* add(1, 2);
  const b = yield* add(2, 3);
  const c = a + b;
  return 2 * c;
});

const prog = Effect.runSyncExit(run);

const result = Exit.match(prog, {
  onSuccess: (r) => r,
  onFailure: (e) => Cause.squash(e) as string,
});

Deno.test("Effect.gen", () => {
  assertEquals(result, 16);
});
