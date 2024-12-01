import { fetchUser } from "@/api/auth";
import { User } from "@/models/User";
import { useEffect, useState } from "react";

export default function useUser() {
  const [data, setData] = useState<User | undefined>(undefined);
  useEffect(() => {
    fetchUser().then((user) => setData(user));
  }, []);
  return data;
}
