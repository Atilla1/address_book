import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { getUsers } from "./services/userService";
import { User } from "./types";

const UserContext = createContext([] as User[]);

export default function UserProvider({ children }: PropsWithChildren) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then((users: any) => setUsers(users));
  }, []);

  return <UserContext.Provider value={users}>{children}</UserContext.Provider>;
}

export function useUsers() {
  return useContext(UserContext);
}
