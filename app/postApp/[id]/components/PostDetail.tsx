import { FC } from "react";
import styles from "../../postApp.module.css";

interface Props {
  post: Post | null;
  user: User | null;
}

const PostDetail: FC<Props> = ({ post, user }) => {
  return (
    <div className={styles.postDetail}>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      <h2>{user?.name}</h2>
    </div>
  );
};

export default PostDetail;
