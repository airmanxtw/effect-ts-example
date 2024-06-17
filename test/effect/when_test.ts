import { Effect,  Option } from "npm:effect";
import { assertEquals } from "assert";

const result = (n: number) => Effect.succeed(n).pipe(Effect.when(() => n > 10));

const prog = Effect.runSync(result(15));

Deno.test("Effect.when", () => {
  const result=Option.match(prog,{
    onSome:(v)=>v,
    onNone:()=>0
  });
  assertEquals(result, 15);
});



