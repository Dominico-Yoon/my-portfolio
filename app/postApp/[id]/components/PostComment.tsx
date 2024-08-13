import { FC } from "react";
import styles from "../../postApp.module.css";
interface Props {
  comment: Comment;
}

const PostComment: FC<Props> = ({ comment }) => {
  return (
    <div className={styles.postComment}>
      <div>이름 : {comment.name}</div>
      <div>이메일 : {comment.email}</div>
      <div>내용 : {comment.body}</div>
    </div>
  );
};

export default PostComment;
