import { assertEquals } from "assert";
import { Effect } from "npm:effect";

/**
 * Represents the result of negating a boolean value.
 */
const notTrue = Effect.negate(Effect.succeed(true));
const result = Effect.runSync(notTrue);
Deno.test("Effect.negate", () => {
  assertEquals(result, false);
});
