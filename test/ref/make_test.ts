import { assertEquals } from "assert";
import { Effect, Ref, pipe } from "npm:effect";

Deno.test("Ref.make", () => {
  const age = Ref.make(18);
  const prog = pipe(
    age,
    Effect.tap(Ref.update((n) => n + 1)),
    Effect.tap(Ref.update((n) => n + 1)),
    Effect.flatMap(Ref.get)
  );

  const result = Effect.runSync(prog);

  assertEquals(result, 20);
});

Deno.test("Ref.make 2", () => {
  const age = Effect.succeed(18);
  const prog = pipe(
    age,
    Effect.map((a) => a + 1),
    Effect.map((a) => a + 1)
  );

  const result = Effect.runSync(prog);

  assertEquals(result, 20);
});
