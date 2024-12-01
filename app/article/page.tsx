import { getArticles } from "@/api/article";
import Link from "next/link";

export default async function ArticleIndex() {
  const articles = await getArticles(10);
  return (
    <div className="container">
      <h1 className="title">게시글 목록</h1>
      <table className="table is-striped is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th style={{ width: "10%" }}>번호</th>
            <th style={{ width: "50%" }}>제목</th>
            <th style={{ width: "20%" }}>작성자</th>
            <th style={{ width: "20%" }}>작성일</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id}>
              <td>{article.id}</td>
              <td>
                <Link href={`/article/${article.id}`}>{article.title}</Link>
              </td>
              <td>{article.author.nickname}</td>
              <td>{article.createdAt.toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link
        href="article/write"
        className="button is-primary is-large"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
        }}
      >
        <i className="fas fa-plus"></i>
      </Link>
    </div>
  );
}
