import { assertEquals } from "assert";
import { Effect } from "npm:effect";

const doFaild = Effect.fail("failed");

const doElseif = doFaild.pipe(Effect.orElse(() => Effect.succeed("success")));

const result = Effect.runSync(doElseif);
Deno.test("Effect.orElse", () => {
  assertEquals(result, "success");
});
