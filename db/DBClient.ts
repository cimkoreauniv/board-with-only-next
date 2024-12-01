import { PrismaClient } from "@prisma/client";
import { UserInterface } from "./user.interface";
import { UserRepository } from "./user.repository";
import { ArticleInterface } from "./article.interface";
import { ArticleRepository } from "./article.repository";

export class DBClient {
  client: PrismaClient;
  user: UserInterface;
  article: ArticleInterface;
  constructor() {
    this.client = new PrismaClient();
    this.user = new UserRepository(this.client);
    this.article = new ArticleRepository(this.client);
  }
}
