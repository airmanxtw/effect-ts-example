import { Stream } from "npm:effect";

const stream = Stream.tick("2 seconds");

stream.pipe((_) => console.log("tick"));
