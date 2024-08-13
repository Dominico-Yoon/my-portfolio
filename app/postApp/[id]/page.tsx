"use client";

import {
  deletePost,
  getCommentByPostId,
  getPostById,
  getUserById,
} from "@/api";
import PostDetail from "./components/PostDetail";
import PostComment from "./components/PostComment";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Post = ({ params }: { params: { id: string } }) => {
  const [post, setPost] = useState<Post | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [fetchPost, fetchUser, fetchComments] = await Promise.all([
          getPostById(parseInt(params.id)),
          getUserById(parseInt(params.id)),
          getCommentByPostId(parseInt(params.id)),
        ]);

        setPost(fetchPost);
        setUser(fetchUser);
        setComments(fetchComments);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  const handleDelete = async () => {
    try {
      await deletePost(parseInt(params.id));
      alert("삭제 완료 했습니다.");
      router.push("/postApp");
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("삭제에 실패 하였습니다.");
    }
  };

  const handleTest = () => {
    console.log(post);
  };

  if (isLoading) return <div>불러오는 중입니다...</div>;

  return (
    <div>
      <button onClick={handleTest}>테스트 버튼</button>
      <PostDetail post={post} user={user} />
      <button onClick={handleDelete}>삭제하기</button>
      <div>
        {comments.map((comment: Comment) => (
          <PostComment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Post;
