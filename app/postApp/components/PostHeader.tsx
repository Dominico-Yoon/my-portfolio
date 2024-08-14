import { useRouter } from "next/navigation";
import { FC } from "react";
import styles from "../postApp.module.css";

interface Props {
  text: string;
  title: string | undefined;
}

const PostHeader: FC<Props> = ({ text, title }) => {
  const router = useRouter();
  const handleClickButton = () => {
    router.back();
  };
  return (
    <div className={styles.postHeader}>
      <button className={styles.headerBtn} onClick={handleClickButton}>
        {text}
      </button>
      <h1 className={styles.headerTitle}>{title}</h1>
    </div>
  );
};

export default PostHeader;
