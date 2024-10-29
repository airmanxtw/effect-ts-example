import { assertEquals } from "assert";
import { Effect } from "npm:effect@3.4.0";

const test = Effect.loop(10, {
  while: (x) => x > 0,
  step: (x) => x - 1,
  body: (x) => Effect.succeed(x),
});
const prog = Effect.runSync(test);

Deno.test("Effect.loop example 1", () => {
  assertEquals(prog, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
});
