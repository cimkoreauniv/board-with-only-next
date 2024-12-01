"use client";

import { createArticle } from "@/api/article";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function CreateArticle() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createArticle({ title, content }).then((id) => {
      router.push(`/article/${id}`);
    });
  };

  return (
    <div className="container">
      <h1 className="title">게시글 작성</h1>
      <form onSubmit={onSubmit}>
        <div className="field">
          <label className="label">제목</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="게시글 제목 입력"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">내용</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="게시글 내용 입력"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" type="submit">
              작성
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
