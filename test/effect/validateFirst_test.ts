import { assertEquals } from "assert";
import {  Effect } from "npm:effect";

const fun1 = (n:number)=>Effect.succeed(n);

const fun2 = (n:number)=>Effect.fail("error");

const funs = [fun1,fun2];

const prog = Effect.validateFirst(funs,(f)=>f(1));

const result = Effect.runSync(prog);

Deno.test("Effect.validateFirst", () => {
  assertEquals(result, 1);
});