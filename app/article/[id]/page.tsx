import { getArticle } from "@/api/article";

export default async function OneArticle({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const article = await getArticle(Number(id));
  if (!article) return <div>Article not found</div>;
  return (
    <div className="container">
      <h1 className="title">{article.title}</h1>
      <div className="content">{article.content}</div>
    </div>
  );
}
