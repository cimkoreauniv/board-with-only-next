"use server";

import dbInstance from "@/db/dbInstance";
import { SignupInfo } from "@/models/User";

export async function signup(data: SignupInfo) {
  const user = await dbInstance.findByUsername(data.username);
  if (user) {
    throw new Error("이미 존재하는 아이디입니다.");
  }
  await dbInstance.createUser(data);
}
