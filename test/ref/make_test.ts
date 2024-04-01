import { assertEquals } from "assert";
import { Effect, Ref, pipe } from "npm:effect";
import { flatMap, pipeThroughChannelOrFail } from "npm:effect/Stream";
import { fromEffectTagged } from "npm:effect/RequestResolver";

const age = Ref.make(18);
const prog = pipe(age, Effect.flatMap(Ref.updateAndGet<number>((n) => n + 1)));

const result = Effect.runSync(prog);

Deno.test("Ref.make", () => {
  assertEquals(result, 19);
});
