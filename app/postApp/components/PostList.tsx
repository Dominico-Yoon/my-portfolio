import Link from "next/link";
import { FC } from "react";
import styles from "../postApp.module.css";

interface Props {
  posts: Post[];
}

const PostList: FC<Props> = ({ posts }) => {
  return (
    <div className={styles.PostList}>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/postApp/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </div>
  );
};

export default PostList;
