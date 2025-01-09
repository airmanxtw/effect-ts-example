import { assertEquals } from "assert";

//const fun = (x: number): number => (x < 2 ? 1 : x * fun(x - 1));

const fun2 = (f: (x: number) => number) => (y: number) => f(y);

//const result = fun2((x) => (x < 2 ? 1 : x * fun(x - 1)))(3);

Deno.test("example1", () => {
  //assertEquals(fun(3), 6);
  assertEquals(fun2((x) => (x < 2 ? 1 : x * fun(x - 1)))(3), 6);
});
