import { assertEquals } from "assert";

const fun = (x: number): number => (x < 2 ? 1 : x * fun(x - 1));

Deno.test("example1", () => {
  assertEquals(fun(3), 6);
});
