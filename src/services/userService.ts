import axios from "axios";
import { User } from "../types";

const API_URL = "https://randomuser.me/api/?results=10&seed=atilla&nat=gb";

export async function getUsers(): Promise<User[]> {
  const res = await axios.get(API_URL);

  return res.data.results.map(
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
