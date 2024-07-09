import axios from "axios";
import { User } from "../types";

const API_URL = "https://randomuser.me/api/?results=100&seed=atilla&nat=gb";

export async function getUsers(): Promise<User[]> {
  const res = await axios.get(API_URL);
  return mapToUsers(res.data.results);
}

export async function getUser(id: string): Promise<User | undefined> {
  const users = await getUsers();
  return users.find((u) => u.id === id);
}

function mapToUsers(results: any): User[] {
  return results.map(
    (result: any) =>
      ({
        id: result.login.uuid,
        name: result.name.first + " " + result.name.last,
        email: result.email,
        phone: result.phone,
        avatar: result.picture.large,
      } as User)
  );
}
