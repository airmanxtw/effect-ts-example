import { Effect } from "npm:effect";
const result = (n: number) => Effect.succeed(n).pipe(Effect.when(() => n > 10));
