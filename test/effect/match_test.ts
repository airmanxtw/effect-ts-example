import { assertEquals } from "assert";
import { Match } from "npm:effect";

const match = Match.type<number>().pipe(
  Match.when(
    (v) => v == 0 || v == 1,
    (_) => 1
  ),  
  Match.orElse((_) => 2)
);

Deno.test("Match test", () => {
  assertEquals(match(0), 1);
});
