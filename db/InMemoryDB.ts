import { SignupInfo } from "@/models/User";
import { UserRepository, UserTable } from "./user.interface";

export class InMemoryDB implements UserRepository {
  user: UserTable[];
  id: number;
  constructor() {
    this.id = Math.floor(Math.random() * 100);
    console.log("construct", this.id);
    this.user = [];
  }

  async findById(id: number) {
    console.log(this.id, "id");
    return this.user[id - 1];
  }

  async findByUsername(username: string) {
    console.log(this.id, "name");
    return this.user.find((x) => x.username === username);
  }

  async createUser(user: SignupInfo) {
    console.log(this.id, "create");
    this.user.push({ ...user, id: this.user.length + 1 });
  }
}
