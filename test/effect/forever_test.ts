import { assertEquals } from "assert";
import { Effect, Exit,Cause } from "npm:effect";


const fun = ()=>Effect.fail("done");

const run = Effect.forever(fun());

const prog = Effect.runSyncExit(run);

const result = Exit.match(prog,{
  onSuccess: (_) => "",
  onFailure: (e) => Cause.squash(e) as string ,
});

Deno.test("Effect.forever", () => {
  assertEquals(result, "done");
});
