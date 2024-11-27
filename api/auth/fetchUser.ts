"use server";

import { getDB } from "@/db/dbInstance";
import { cookies } from "next/headers";

export const fetchUser = async () => {
  const cookie = await cookies();
  const token = cookie.get("token");
  if (token) return await getDB().findById(Number(token.value));
  else return undefined;
};
