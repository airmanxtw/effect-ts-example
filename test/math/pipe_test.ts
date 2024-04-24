import { assertEquals } from "assert";
import { pipe } from "npm:effect";

const f = (x: number) => x + 1;
const g = (x: number) => x + 2;

const h = (x: number) => f(g(x));
const p = (x: number) => pipe(x, g, f);

Deno.test("example1", () => {
  assertEquals(h(2), p(2));
});
