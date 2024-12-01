"use server";

import dbInstance from "@/db/dbInstance";
import { cookies } from "next/headers";

export const getArticles = async (count: number, start: number = 0) => {
  return await dbInstance.article.getArticles(count, start);
};

export const getArticle = async (id: number) => {
  return await dbInstance.article.findArticleById(id);
};

export const createArticle = async (data: {
  title: string;
  content: string;
}) => {
  const cookie = await cookies();
  const token = cookie.get("token");
  if (!token) throw new Error("로그인이 필요합니다.");
  return dbInstance.article.createArticle({
    title: data.title,
    content: data.content,
    authorId: Number(token.value),
  });
};
