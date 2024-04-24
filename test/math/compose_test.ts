import { assertEquals } from "assert";
import { Function } from "npm:effect";



const f = (x: number) => x + 1;
const g = (x: number) => x + 2;

const h = (x: number) => f(g(x));
const p = (x: number) => Function.compose(f, g)(x);

Deno.test("example1", () => {
  assertEquals(h(2), p(2));
});