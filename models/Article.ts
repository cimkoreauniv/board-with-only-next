import { User } from "./User";

export interface Article {
  id: number;
  title: string;
  createdAt: Date;
  content: string;
  author: User;
}

export interface CreateArticle {
  title: string;
  content: string;
  authorId: number;
}
