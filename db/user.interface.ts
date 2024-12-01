import { SignupInfo, User } from "@/models/User";

export interface UserTable extends User {
  id: number;
  password: string;
}

export interface UserInterface {
  findByUsername: (username: string) => Promise<UserTable | undefined>;
  findByUserId: (id: number) => Promise<User | undefined>;
  createUser: (data: SignupInfo) => Promise<void>;
}
