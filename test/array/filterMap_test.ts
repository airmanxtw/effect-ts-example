import { Array, pipe } from "npm:effect";

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

console.log(result); // Output: ["Alice", "Charlie"]
