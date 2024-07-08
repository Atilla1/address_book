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
    <div className="m-10">
      <h1 className="text-3xl">Användare</h1>
      <ul className="grid grid-cols-1 2xl:grid-cols-4 gap-8 justify-items-center mt-4">
        {users.map((user) => (
          <li className="w-full p-4 shadow rounded" key={user.id}>
            <div className="flex">
              <img className="w-20 rounded-full mr-4" src={user.avatar} />
              <div className="flex flex-col">
                <p className="font-semibold">{user.name}</p>
                <p className="text-gray-500">{user.email}</p>
                <p className="text-gray-500">{user.phone}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
