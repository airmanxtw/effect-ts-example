import { assertEquals } from "assert";
import { Effect, Stream, Exit, Chunk } from "npm:effect";

const stream = Stream.make(1, 2, 3);
Stream.run;
const prog = Effect.runSyncExit(Stream.runCollect(stream));

const result = Exit.match(prog, {
  onSuccess: (value) => value.pipe(Chunk.toArray),
  onFailure: (error) => error,
});

Deno.test("Stream.runCollect", () => {
  assertEquals(result, [1, 2, 3]);
});
