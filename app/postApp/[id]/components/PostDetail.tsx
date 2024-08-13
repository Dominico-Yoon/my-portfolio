import { FC } from "react";

interface Props {
  post: Post | null;
  user: User | null;
}

const PostDetail: FC<Props> = ({ post, user }) => {
  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      <h2>{user?.name}</h2>
    </div>
  );
};

export default PostDetail;
