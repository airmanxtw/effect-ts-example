import { assertEquals } from "assert";
import { Effect } from "npm:effect@3.4.0";
import { HttpClient, HttpClientRequest, HttpClientResponse } from "npm:@effect/platform";

type Todo = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

const prog = HttpClientRequest.get("https://jsonplaceholder.typicode.com/todos/1").pipe(
  HttpClient.fetchOk,
  HttpClientResponse.json,
  Effect.map((x) => x as Todo)
);

const res = await Effect.runPromise(prog);

Deno.test("example1", () => {
  assertEquals(res, {
    completed: false,
    id: 1,
    title: "delectus aut autem",
    userId: 1,
  });
});
