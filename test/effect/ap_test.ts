import { assertEquals } from "assert";

import { Effect } from "npm:effect";

const add = (x: number, y: number): Effect.Effect<number, string> =>
  x > 0 && y > 0 ? Effect.succeed(x + y) : Effect.fail("x and y must be greater than 0");

const addOne = Effect.succeed((x: number) => x + 1);

const test = Effect.ap(add(5, 6))(addOne);
const prog = Effect.runSync(test);

Deno.test("Effect.ap", () => {
  assertEquals(prog, 12);
});
