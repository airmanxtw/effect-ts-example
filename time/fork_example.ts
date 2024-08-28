import { Effect, Fiber } from "npm:effect";

const add = (x: number, y: number): Effect.Effect<number, string> =>
  x > 0 && y > 0 ? Effect.succeed(x + y) : Effect.fail("error");

const addFork = Effect.fork(add(1, 2));

const run1 = addFork.pipe(Effect.flatMap(Fiber.join));

const run2 = add(1, 2);

const run3 = Effect.gen(function* () {
  const a = yield* addFork;
  const b = yield* Fiber.join(a);
  return b;
});

console.time("run1");
Effect.runSync(run1);
console.timeEnd(`run1`);

console.time("run2");
Effect.runSync(run2);
console.timeEnd(`run2`);

console.time("run3");
Effect.runSync(run3);
console.timeEnd(`run3`);
