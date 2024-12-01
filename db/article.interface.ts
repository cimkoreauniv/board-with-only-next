import { Article, CreateArticle } from "@/models/Article";

export interface ArticleInterface {
  findArticleById: (id: number) => Promise<Article | undefined>;
  createArticle: (data: CreateArticle) => Promise<Number>;
  updateArticle: (id: number, data: Partial<CreateArticle>) => Promise<void>;
  getArticles: (count: number, start?: number) => Promise<Article[]>;
  deleteArticle: (id: number) => Promise<void>;
}
