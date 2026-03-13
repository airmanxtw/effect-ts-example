import { assertEquals } from "assert";
import { Effect,Exit } from "npm:effect@3.4.0";

// 定義函式
const addTen = (v:number):Effect.Effect<number,string,never> =>    
    v>0 ? Effect.succeed(v+10) : Effect.fail("x must be greater than 0");

// 執行函式
const prog = Effect.runSyncExit(addTen(5));

// 處理結果
const result  = Exit.match(prog, {
    onSuccess: (v) => v,
    onFailure: (_) => -1
});

// 測試
Deno.test("Effect.cached", () => {
  assertEquals(result, 15);
});


    
    