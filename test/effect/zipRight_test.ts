import { assertEquals } from "assert";
import { Effect, pipe } from "npm:effect";

const A1 = Effect.succeed(1);
const A2 = Effect.succeed(2);

const prog = pipe(A1, Effect.zipRight(A2));

const result = Effect.runSync(prog);

Deno.test("Effect.zip", () => {
  assertEquals(result, 2);
});