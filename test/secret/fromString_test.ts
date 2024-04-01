import { assertEquals } from "assert";
import { Secret } from "npm:effect";

const secret = Secret.fromString("this is a secret");

Deno.test("Secret.fromString", () => {
  assertEquals(Secret.value(secret), "this is a secret");
});
