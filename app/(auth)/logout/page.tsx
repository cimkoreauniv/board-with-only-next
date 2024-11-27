"use client";

import { logout } from "@/api/auth/logout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Logout() {
  const router = useRouter();
  useEffect(() => {
    logout().then(() => router.replace("/"));
  }, []);
  return null;
}
