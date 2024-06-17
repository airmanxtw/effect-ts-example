import { assertEquals } from "assert";
import { Console, Effect, pipe, Exit, Cause } from "npm:effect";

const ten = Effect.succeed(10);

const prog = pipe(
  ten,
  Effect.tap((n) => Console.log(n)),
  Effect.map((n) => n + 1)
);

const result = Effect.runSync(prog);

Deno.test("Effect.tap", () => {
  assertEquals(result, 11);
});

const isTen = (_: number) => Effect.fail("is Ten");

const prog2 = pipe(
  ten,
  Effect.tap(isTen),
  Effect.map((n) => n + 1)
);

const result2 = Exit.match(Effect.runSyncExit(prog2), {
  onSuccess: (_) => "OK",
  onFailure: (e) => Cause.squash(e) as string,
});

Deno.test("Effect.tap 2", () => {
  assertEquals(result2, "is Ten");
});
