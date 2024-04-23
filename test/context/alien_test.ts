import { assertEquals } from "assert";
import { Effect, Context } from "npm:effect";

class Alien extends Context.Tag("Alien")<
  Alien,
  {
    hello(): Effect.Effect<string>;
    walk(): Effect.Effect<string>;
  }
>() {}

const prog = Alien.pipe(
  Effect.flatMap((alien) => Effect.all([alien.hello(), alien.walk()])),
  Effect.flatMap(([hello, walk]) => Effect.succeed(`${hello},${walk}`))
);

const earth = {
  hello() {
    return Effect.succeed("我是地球人");
  },
  walk() {
    return Effect.succeed("我用下肢兩腿走路");
  },
};

const mars = {
  hello() {
    return Effect.succeed("我是火星人");
  },
  walk() {
    return Effect.succeed("我用八肢走路");
  },
};

const runProgEarth = Effect.provideService(prog, Alien, earth);
const runProgMars = Effect.provideService(prog, Alien, mars);

const resultEarth = Effect.runSync(runProgEarth);
const resultMars = Effect.runSync(runProgMars);

Deno.test("地球人", () => {
  assertEquals(resultEarth, "我是地球人,我用下肢兩腿走路");
});

Deno.test("火星人", () => {
  assertEquals(resultMars, "我是火星人,我用八肢走路");
});
