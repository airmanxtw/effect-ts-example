import { assertEquals } from "assert";
import { Effect, Exit, Cause, Fiber } from "npm:effect";

const add = (x: number, y: number): Effect.Effect<number, string> =>
  x > 0 && y > 0 ? Effect.succeed(x + y) : Effect.fail("error");

const addFork = Effect.fork(add(1, 2));

const run1 = addFork.pipe(Effect.flatMap(Fiber.join));

// const run = Effect.gen(function* () {
//   const a = yield* addFork;
//   const b = yield* Fiber.join(a);
//   const c = a + b;
//   return 2 * c;
// });

const prog1 = Effect.runSyncExit(run1);

const result1 = Exit.match(prog1, {
  onSuccess: (r) => r,
  onFailure: (e) => Cause.squash(e) as string,
});

Deno.test("Effect.gen", () => {
  assertEquals(result1, 3);
});
