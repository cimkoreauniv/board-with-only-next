"use server";

import dbInstance from "@/db/dbInstance";
import { LoginInfo } from "@/models/User";
import { cookies } from "next/headers";

export async function login({ username, password }: LoginInfo) {
  const cookieStore = await cookies();
  const user = await dbInstance.findByUsername(username);
  if (!user || user.password !== password)
    throw new Error("아이디가 존재하지 않거나 비밀번호가 일치하지 않습니다.");

  cookieStore.set("token", user.id.toString(), { httpOnly: true });
}
