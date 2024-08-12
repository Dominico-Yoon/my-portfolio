"use client";

import { getPosts } from "@/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import PostList from "./components/PostList";

const PostApp = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.log("갖고 오기 실패 하였습니다.", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>게시판</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default PostApp;
