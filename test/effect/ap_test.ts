import { assertEquals } from "assert";

import { Effect } from "npm:effect";

const fun = (f: (n: number) => number) => Effect.succeed(f);

const test = Effect.ap(Effect.succeed(10))(fun((n) => n + 2));
const prog = Effect.runSync(test);

Deno.test("Effect.ap", () => {
  assertEquals(prog, 12);
});
