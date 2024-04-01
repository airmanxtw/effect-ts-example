import { assertEquals } from "assert";
import { Effect, Ref, pipe } from "npm:effect";

const useAge = (age: Ref.Ref<number>) => {
  //const add = pipe(age, Effect.flatMap(Ref.updateAndGet<number>((n) => n + 1)));
  const add = Ref.update(age, (n) => n + 1);
  const get = Ref.get(age);
  return { add, get };
};

const prog = pipe(
  Ref.make(18),
  Effect.map(useAge),
  Effect.flatMap(({ add, get }) => add.pipe(() => get))
);
const result = Effect.runSync(prog);

Deno.test("Ref.make", () => {
  assertEquals(result, 19);
});
