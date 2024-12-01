import { SignupInfo } from "@/models/User";
import { PrismaClient } from "@prisma/client";

export class DBClient {
  prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async findByUserId(id: number) {
    return await this.prisma.users.findUnique({
      where: {
        id,
      },
    });
  }

  async findByUsername(username: string) {
    return await this.prisma.users.findUnique({
      where: {
        username,
      },
    });
  }

  async createUser({ username, nickname, password }: SignupInfo) {
    await this.prisma.users.create({
      data: {
        username,
        nickname,
        password,
      },
    });
  }
}
