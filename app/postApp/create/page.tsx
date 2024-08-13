"use client";

import { createPost } from "@/api";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const router = useRouter();

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // 로그인 없이 테스트 하기 때문에 userId는 11로 고정
      const newPost = await createPost({ title, body, userId: 11 });
      // console.log();
      alert("게시글이 생성되었습니다.");
      router.push("/postApp");
    } catch (error) {
      console.error("Failed to create post:", error);
      alert("게시글 생성에 실패했습니다.");
    }
  };

  return (
    <div>
      <h1>게시글 생성</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>제목 : </label>
          <input onChange={onChangeTitle} value={title} type="text" />
        </div>
        <div>
          <label>내용 : </label>
          <textarea onChange={onChangeBody} value={body} />
        </div>
        <button type="submit">게시글 생성</button>
      </form>
    </div>
  );
};

export default CreatePost;
