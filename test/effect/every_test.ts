import { assertEquals } from "assert";
import { Effect } from "npm:effect";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1];

const isPositive = Effect.every((n: number) => Effect.succeed(n > 0));
const prog = Effect.runSync(isPositive(numbers));
Deno.test("Effect.every", () => {
  assertEquals(prog, false);
});
