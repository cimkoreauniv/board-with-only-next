import Link from "next/link";

export default function ArticleIndex() {
  return (
    <div className="container">
      <h1 className="title">게시글 목록</h1>
      <Link
        href="article/write"
        className="button is-primary is-large"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
        }}
      >
        새 글
      </Link>
    </div>
  );
}
