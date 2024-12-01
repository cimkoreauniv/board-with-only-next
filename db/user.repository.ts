import { PrismaClient } from "@prisma/client";
import { UserInterface } from "./user.interface";
import { SignupInfo } from "@/models/User";

export class UserRepository implements UserInterface {
  client: PrismaClient;
  constructor(client: PrismaClient) {
    this.client = client;
  }

  async findByUserId(id: number) {
    return await this.client.appUser.findUnique({
      where: {
        id,
      },
    });
  }

  async findByUsername(username: string) {
    return await this.client.appUser.findUnique({
      where: {
        username,
      },
    });
  }

  async createUser({ username, nickname, password }: SignupInfo) {
    await this.client.appUser.create({
      data: {
        username,
        nickname,
        password,
      },
    });
  }
}
