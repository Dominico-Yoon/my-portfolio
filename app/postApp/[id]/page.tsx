import { getCommentByPostId, getPostById, getUserById } from "@/api";

const PostDetail = async ({ params }: { params: { id: string } }) => {
  try {
    const [post, user, comments] = await Promise.all([
      getPostById(parseInt(params.id)),
      getUserById(parseInt(params.id)),
      getCommentByPostId(parseInt(params.id)),
    ]);

    if (!post) return <div>불러오는 중입니다...</div>;

    return (
      <div>
        <h1>{post?.title}</h1>
        <p>{post?.body}</p>
        <h2>{user?.name}</h2>
        <div>
          {comments.map((comment: Comment) => (
            <div key={comment.id}>
              <div>이름 : {comment.name}</div>
              <div>이메일 : {comment.email}</div>
              <div>내용 : {comment.body}</div>
            </div>
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

export default PostDetail;
