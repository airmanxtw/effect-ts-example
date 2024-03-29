import { assertEquals } from "https://deno.land/std@0.220.0/assert/mod.ts";
import { Effect } from "npm:effect";

/**
 * Represents the result of negating a boolean value.
 */
const notTrue = Effect.negate(Effect.succeed(true));
const result = Effect.runSync(notTrue);

assertEquals(result, false);
