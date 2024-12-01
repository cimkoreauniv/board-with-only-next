"use server";

import dbInstance from "@/db/dbInstance";
import { cookies } from "next/headers";

export const fetchUser = async () => {
  const cookie = await cookies();
  const token = cookie.get("token");
  if (token) return await dbInstance.findByUserId(Number(token.value));
  else return undefined;
};
