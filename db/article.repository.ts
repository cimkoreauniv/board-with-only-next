import { CreateArticle } from "@/models/Article";
import { PrismaClient } from "@prisma/client";
import { ArticleInterface } from "./article.interface";

export class ArticleRepository implements ArticleInterface {
  client: PrismaClient;
  constructor(client: PrismaClient) {
    this.client = client;
  }
  async createArticle(data: CreateArticle) {
    const article = await this.client.article.create({
      data: {
        title: data.title,
        content: data.content,
        authorId: data.authorId,
      },
    });
    return article.id;
  }

  async findArticleById(id: number) {
    return this.client.article.findUnique({
      where: { id },
      include: { author: true },
    });
  }

  async updateArticle(id: number, data: Partial<CreateArticle>) {
    await this.client.article.update({
      where: { id },
      data: {
        title: data.title,
        content: data.content,
      },
    });
  }

  async getArticles(count: number, start: number = 0) {
    return this.client.article.findMany({
      take: count,
      skip: start,
      where: { deleted: false },
      include: { author: true },
    });
  }

  async deleteArticle(id: number) {
    await this.client.article.update({
      where: { id },
      data: { deleted: true },
    });
  }
}
