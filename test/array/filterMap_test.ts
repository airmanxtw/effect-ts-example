import { Array, pipe, Option } from "npm:effect";

type User = {
  name: string;
  active: boolean;
};

const Users: User[] = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Charlie", active: true },
];

const listAllUsers = (users: User[]) => {
  console.log(users);
  return users;
};

const result = pipe(
  Users,
  listAllUsers,
  Array.filter((u) => u.active),
  Array.map((u) => u.name),
);

const result2 = pipe(
  Users,
  Array.filterMap((u) => (u.active ? Option.some(u.name) : Option.none())),
  Array.head,
);

console.log(result); // Output: ["Alice", "Charlie"]
console.log(result2); // Output: Option.some("Alice")
