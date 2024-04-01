import { assertEquals } from "assert";
import { Effect } from "npm:effect";

const fun1 = Effect.succeed(1);
const fun2 = Effect.fail("error");
const fun3 = Effect.succeed(3);

const test = Effect.match(Effect.all([fun1, fun2]), {
  onSuccess: (x) => x,
  onFailure: (_) => "error",
});

const test2 = Effect.all([fun1, fun3]);

const prog = Effect.runSync(test);

const prog2 = Effect.runSync(test2);

Deno.test("Effect.all example 1", () => {
  assertEquals(prog, "error");
});

Deno.test("Effect.all example 2", () => {
  assertEquals(prog2, [1, 3]);
});
