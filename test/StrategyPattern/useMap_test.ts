import { assertEquals } from "assert";

const add = (n: number) => n + 1;
const sub = (n: number) => n - 1;
const mul = (n: number) => n * 2;
const div = (n: number) => n / 2;

const sp = new Map<string, (n: number) => number>([
  ["add", add],
  ["sub", sub],
  ["mul", mul],
  ["div", div],
]);

Deno.test("add test", () => assertEquals(sp.get("add")!(1), 2));
Deno.test("sub test", () => assertEquals(sp.get("sub")!(1), 0));
Deno.test("mul test", () => assertEquals(sp.get("mul")!(1), 2));
Deno.test("div test", () => assertEquals(sp.get("div")!(1), 0.5));
