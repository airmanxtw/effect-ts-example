import { assertEquals } from "assert";
import { Effect, pipe, Exit, Cause } from "npm:effect";

const number = Effect.succeed(10);
const isPositive = number.pipe(
  Effect.filterOrFail(
    (n) => n > 0,
    () => "Number is not positive"
  )
);

const prog = Effect.runSync(isPositive);
Deno.test("Effect.filterOrFail", () => {
  assertEquals(prog, 10);
});

const isNegative = pipe(
  number,
  Effect.filterOrFail(
    (n) => n < 0,
    () => "Number is not isNegative"
  )
);

const prog2 = Exit.match(Effect.runSyncExit(isNegative), {
  onSuccess: (_) => "OK",
  onFailure: (e) => Cause.squash(e) as string,
});

Deno.test("Effect.filterOrFail 2", () => {
  assertEquals(prog2, "Number is not isNegative");
});
