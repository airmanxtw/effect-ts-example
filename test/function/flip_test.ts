import { assertEquals } from "assert";
import { Effect, Function, pipe } from "npm:effect";
import { flip } from "npm:effect/Function";

const subs1 = (a: number) => (b: string) => b.substring(0, a);
const subs2 = flip(subs1);

Deno.test("Function.flip", () => {
  assertEquals(subs2("hello")(3), "hel");
});
