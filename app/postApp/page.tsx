"use client";

import { getPosts } from "@/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import PostList from "./components/PostList";
import styles from "./postApp.module.css";

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
    <div className={styles.postApp}>
      <h1>게시판</h1>
      <div className={styles.btnContainer}>
        <Link href="/postApp/create">
          <button className={styles.createBtn}>게시글 추가</button>
        </Link>
      </div>

      <PostList posts={posts} />
    </div>
  );
};

export default PostApp;
