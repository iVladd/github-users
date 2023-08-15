import { User } from "../types/user";

export async function fetchUser(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`);

  const data = (await response.json()) as User;

  return data;
}
