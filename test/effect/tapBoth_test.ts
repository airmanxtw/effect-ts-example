import { assertEquals } from "assert";
import { Console, Effect, pipe } from "npm:effect";

const ten = Effect.succeed(10);

const prog = pipe(
  ten,
  Effect.tapBoth({
    onSuccess: (n) => Console.log(n),
    onFailure: (e) => Console.error(e)
  }),
  Effect.map((n) => n + 1)
);

const result = Effect.runSync(prog);

Deno.test("Effect.tap", () => {
  assertEquals(result, 11);
});