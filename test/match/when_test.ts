import { assertEquals } from "assert";
import { Effect, Match, Exit } from "npm:effect";

const getDesc = (x: number) =>
  Match.value(x).pipe(
    Match.when(0, () => "zero"),
    Match.when(1, () => "one"),
    Match.when(2, () => "two"),
    Match.orElse(() => "other")
  );

Deno.test("example1", () => {
  assertEquals(getDesc(0), "zero");
});

const getDesc2 = (x: number) =>
  Match.value(x).pipe(
    Match.when(
      (v) => v < 60,
      () => "bad"
    ),
    Match.when(
      (v) => v >= 60,
      () => "good"
    ),
    Match.orElse(() => "other")
  );

Deno.test("example2", () => {
  assertEquals(getDesc2(71), "good");
});

const getDesc3 = (x: number) =>
  Match.value(x).pipe(
    Match.when(
      (v) => v >= 0,
      () => "positive"
    ),
    Match.either
  );

const result = Exit.match(Effect.runSyncExit(getDesc3(9)), {
  onSuccess: (v) => v,
  onFailure: (_) => "error",
});

Deno.test("example3", () => {
  assertEquals(result, "positive");
});
