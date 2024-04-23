import { assertEquals } from "assert";
import { Effect, Context } from "npm:effect";

class Pi extends Context.Tag("Pi")<
  Pi,
  {
    readonly value: Effect.Effect<number>;
    readonly version: Effect.Effect<string>;
    add(a: number, b: number): number;
  }
>() {}

const prog = (r: number) =>
  Pi.pipe(
    Effect.flatMap((pi) => pi.value),
    Effect.map((pivalue) => pivalue * r * r)
  );

const progrunable = Effect.provideService(prog(10), Pi, {
  value: Effect.succeed(3.14),
  version: Effect.succeed("v1"),
  add: (a, b) => a + b,
});

const result = Effect.runSync(progrunable);

Deno.test("Context.tag", () => {
  assertEquals(result, 314);
});
