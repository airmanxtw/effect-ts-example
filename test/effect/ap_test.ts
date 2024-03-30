import { assertEquals } from "assert";
import { Effect, Exit } from "npm:effect";

const add = (x: number, y: number): Effect.Effect<number, string> =>
  x > 0 && y > 0 ? Effect.succeed(x + y) : Effect.fail("x and y must be greater than 0");

const addOne = Effect.fail((x: number) => `Error: ${x}`);
const test = Effect.ap(add(5, 6))(addOne);
const prog = Effect.runSyncExit(test);

Deno.test("Effect.ap", () => {
  const result = Exit.match(prog, {
    onSuccess: (x) => x,
    onFailure: (_) => "error",
  });
  assertEquals(result, "error");
});
