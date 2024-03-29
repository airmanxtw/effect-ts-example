import { assertEquals } from "https://deno.land/std@0.220.0/assert/mod.ts";
import { Effect } from "npm:effect";

/**
 * Represents the result of applying the `Effect.as` operator to the values 10 and the successful effect with a value of 20.
 */
const toTen = Effect.as(10)(Effect.succeed(20));
const prog = Effect.runSync(toTen);

assertEquals(prog, 10);
