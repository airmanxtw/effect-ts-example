import { assertEquals } from "assert";
import { Effect, Exit, Cause } from "npm:effect";

const doFaild = Effect.fail("failed");

const doElseif = doFaild.pipe(Effect.orElseFail(() => "failed too"));

const prog = Effect.runSyncExit(doElseif);

const result = Exit.match(prog, {
  onSuccess: (_) => "",
  onFailure: (e) => Cause.squash(e) as string,
});

Deno.test("Effect.orElseFail", () => {
  assertEquals(result, "failed too");
});
