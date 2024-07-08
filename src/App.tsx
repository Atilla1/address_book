import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUsers } from "./services/userService";
import { User } from "./types";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then((users: any) => setUsers(users));
  }, []);

  return (
    <div className="m-10">
      <h1 className="text-3xl">Användare</h1>
      <ul className="grid grid-cols-1 2xl:grid-cols-4 gap-8 justify-items-center mt-4">
        {users.map((user) => (
          <li
            className="w-full p-4 shadow rounded cursor-pointer hover:scale-105 transition-transform duration-300"
            key={user.id}
          >
            <Link to={`/${user.id}`} className="flex">
              <img className="w-20 rounded-full mr-4" src={user.avatar} />
              <div className="flex flex-col">
                <p className="font-semibold">{user.name}</p>
                <p className="text-gray-500">{user.email}</p>
                <p className="text-gray-500">{user.phone}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
