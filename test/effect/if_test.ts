import { assertEquals } from "assert";
import { Effect, pipe } from "npm:effect";

const getSex = (n: number) =>
  pipe(Effect.succeed(n == 1), Effect.if({ onTrue: Effect.succeed("boy"), onFalse: Effect.succeed("girl") }));

const result =Effect.runSync(getSex(1));

Deno.test("if test", () => {
    assertEquals(result, "boy");
  });
