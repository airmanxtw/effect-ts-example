import { assertEquals } from "assert";
import { Effect, Function, pipe } from "npm:effect";

const sum: {
  (that: number, third: number): (self: number) => number;
  (self: number, that: number, third: number): number;
} = Function.dual(3, (self: number, that: number, third: number): number => self + that + third);

Deno.test("Function.dual 1", () => {
  assertEquals(sum(1, 2, 3), 6);
});

Deno.test("Function.dual 2", () => {
  assertEquals(pipe(1, sum(2, 3)), 6);
});
