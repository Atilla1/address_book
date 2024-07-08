import { useParams } from "react-router-dom";
import { getUser } from "./services/userService";
import { useState, useEffect } from "react";
import { User as UserType } from "./types";

export default function User() {
  const { id } = useParams();
  //const users = useUsers().find(u => u.id === id)

  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    if (!id) return;
    getUser(id).then((user) => setUser(user));
  }, []);

  return (
    <div className="m-4 p-4 rounded shadow-xl ring ring-neutral-200">
      <img src={user?.avatar} className="rounded-full" />
      <div className="text-xl font-bold mt-2">{user?.name}</div>
      <p>{user?.phone}</p>
      <p>{user?.email}</p>
    </div>
  );
}
