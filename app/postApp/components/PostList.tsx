import Link from "next/link";
import { FC } from "react";

interface Props {
  posts: Post[];
}

const PostList: FC<Props> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/postApp/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </div>
  );
};

export default PostList;
