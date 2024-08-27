import { assertEquals } from "assert";
import { Effect } from "npm:effect";
import { pipe } from "../../../../../Users/airmanx/Library/Caches/deno/npm/registry.npmjs.org/effect/2.4.4/dist/dts/Function.d.ts";

const doFaild = Effect.fail("failed");

const doOrDie = Effect.orDie(doFaild);

let msg = "";
try {
  Effect.runSync(doOrDie);
} catch (_) {
  msg = "error";
}

Deno.test("Effect.orDie", () => {
  assertEquals(msg, "error");
});
