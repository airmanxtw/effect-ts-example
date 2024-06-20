import { assertEquals, assertStrictEquals } from "assert";

import { Effect, ReadonlyArray } from "npm:effect";
import { pipe } from "npm:effect/Function";

const dataA = [1, 2, 3, 4, 5];
const dataB = [3, 4, 5, 6, 7];

const resultA = ReadonlyArray.intersection(dataA, dataB);

Deno.test("Array. A", () => {
  assertEquals(resultA, [3, 4, 5]);
});

type Stud = {
  name: string;
  age: number;
};

const studA = [
  { name: "John", age: 20 },
  { name: "Doe", age: 25 },
  { name: "Jane", age: 30 },
];
const studB = [
  { name: "Doe", age: 25 },
  { name: "Wan", age: 25 },
  { name: "John", age: 20 },
];

const resultB = (a: Stud[], b: Stud[], filterStud: (s: Stud[]) => (n: string[]) => Stud[]) =>
  pipe(
    a.map((s) => s.name),
    ReadonlyArray.intersection(b.map((s) => s.name)),
    filterStud(a)
  );

const filterStud = (a: Stud[]) => (i: string[]) => a.filter((s) => i.includes(s.name));

Deno.test("Array.intersection B", () => {
  assertEquals(resultB(studA, studB, filterStud), [
    { name: "John", age: 20 },
    { name: "Doe", age: 25 },
  ]);
});
