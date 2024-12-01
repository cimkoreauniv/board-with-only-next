"use server";

import dbInstance from "@/db/dbInstance";
import { LoginInfo, SignupInfo } from "@/models/User";
import { cookies } from "next/headers";

export const fetchUser = async () => {
  const cookie = await cookies();
  const token = cookie.get("token");
  if (token) return await dbInstance.user.findByUserId(Number(token.value));
  else return undefined;
};

export async function login({ username, password }: LoginInfo) {
  const cookieStore = await cookies();
  const user = await dbInstance.user.findByUsername(username);
  if (!user || user.password !== password)
    throw new Error("아이디가 존재하지 않거나 비밀번호가 일치하지 않습니다.");

  cookieStore.set("token", user.id.toString(), { httpOnly: true });
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("token");
}

export async function signup(data: SignupInfo) {
  const user = await dbInstance.user.findByUsername(data.username);
  if (user) {
    throw new Error("이미 존재하는 아이디입니다.");
  }
  await dbInstance.user.createUser(data);
}
