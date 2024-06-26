import { assertEquals } from "assert";
import { Effect, Types } from "npm:effect";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1];

const dropNegative1 = Effect.dropWhile(numbers, (n: number) => Effect.succeed(n > 0));
const prog1 = Effect.runSync(dropNegative1);
Deno.test("Effect.dropWhile 1", () => {
  assertEquals(prog1, [-1]);
});

const dropNegative2 = Effect.dropWhile<number, never, never>((n) => Effect.succeed(n > 0));
const prog2 = Effect.runSync(dropNegative2(numbers));

Deno.test("Effect.dropWhile 2", () => {
  assertEquals(prog2, [-1]);
});
