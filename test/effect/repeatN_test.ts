import { assertEquals } from "assert";
import { Effect, Ref, pipe } from "npm:effect";
import { aggregate } from "npm:effect/Stream";


// !  uncompleted
Deno.test("Effect.repeatN", () => {
  const counter = 

  const addCounter = () => pipe(counter, (n) => n + 1);
  const repeat5 = Effect.repeatN(addCounter(), 5)
  const repeat5 = addCounter().pipe(
    (_) => counter,
    (c) => c.pipe(Effect.flatMap(Ref.get))
  );

  const result = Effect.runSync(repeat5);

  assertEquals(result, 1);
});
