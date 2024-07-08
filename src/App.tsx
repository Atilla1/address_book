import { useEffect, useState } from "react";
import { getUsers } from "./services/userService";
import { User } from "./types";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then((users) => setUsers(users));
  }, []);

  console.log(users);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
