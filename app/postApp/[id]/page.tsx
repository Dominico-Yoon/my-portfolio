import { getCommentByPostId, getPostById, getUserById } from "@/api";
import PostDetail from "./components/PostDetail";
import PostComment from "./components/PostComment";

const Post = async ({ params }: { params: { id: string } }) => {
  try {
    const [post, user, comments] = await Promise.all([
      getPostById(parseInt(params.id)),
      getUserById(parseInt(params.id)),
      getCommentByPostId(parseInt(params.id)),
    ]);

    if (!post) return <div>불러오는 중입니다...</div>;

    return (
      <div>
        <PostDetail post={post} user={user} />
        <div>
          {comments.map((comment: Comment) => (
            <PostComment key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    if (error instanceof Error) {
      return <div>Error: {error.message}</div>;
    } else {
      return <div>An unknown error occurred</div>;
    }
  }
};

export default Post;
