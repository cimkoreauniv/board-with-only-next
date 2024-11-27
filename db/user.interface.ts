import { SignupInfo, User } from "@/models/User";

export interface UserTable extends User {
  id: number;
  password: string;
}

export interface UserRepository {
  findByUsername: (username: string) => Promise<User | undefined>;
  createUser: (data: SignupInfo) => Promise<void>;
}
