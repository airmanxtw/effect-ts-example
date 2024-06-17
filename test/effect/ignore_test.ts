import { assertStrictEquals } from "assert";
import { Effect } from "npm:effect";

const doLog = (n: number) => Effect.succeed(n).pipe(Effect.ignore);

const result = Effect.runSync(doLog(1));

Deno.test("ignore test", () => {
    assertStrictEquals(result,undefined);
});