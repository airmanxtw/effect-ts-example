import { assertEquals } from "assert";
//import { Effect, Function, pipe } from "npm:effect";

const f = (x: number) => x + 1;
const g = (x: number) => x + 2;

const h = (x: number) => (f(x) * g(x)) / g(x);

Deno.test("example1", () => {
  assertEquals(h(2),f(2));
});
