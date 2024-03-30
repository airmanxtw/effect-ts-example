import { assertEquals } from "assert";
import { Effect } from "npm:effect";

/**
 * Represents the result of applying the `Effect.as` operator to the values 10 and the successful effect with a value of 20.
 */
const toTen = Effect.as(10)(Effect.succeed(20));
const prog = Effect.runSync(toTen);
Deno.test("Effect.as", () => {
  assertEquals(prog, 10);
});
