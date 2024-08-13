"use client";

import { getPosts } from "@/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import PostList from "./components/PostList";
import styles from "./postApp.module.css";

const PostApp = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const postsPerPage = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, total } = await getPosts(currentPage, postsPerPage);
        setPosts(data);
        setTotalPages(Math.ceil(total / postsPerPage));
      } catch (error) {
        console.log("갖고 오기 실패 하였습니다.", error);
      }
    };

    fetchPosts();
  }, [currentPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.postApp}>
      <h1>게시판</h1>
      <div className={styles.btnContainer}>
        <Link href="/postApp/create">
          <button className={styles.createBtn}>게시글 추가</button>
        </Link>
      </div>

      <PostList posts={posts} />

      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index: number) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={index + 1 === currentPage ? styles.activePage : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PostApp;
