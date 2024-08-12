import { FC } from "react";
import styles from "../todoApp.module.css";

interface Props {
  title: string;
  handleConfirmDelete: () => void;
  handleCancleDelete: () => void;
}

const Modal: FC<Props> = ({
  title,
  handleConfirmDelete,
  handleCancleDelete,
}) => {
  return (
    <div className={styles.modalComponent}>
      <div className={styles.modal}>
        <p>{title}</p>
        <button onClick={handleConfirmDelete}>예</button>
        <button onClick={handleCancleDelete}>아니오</button>
      </div>
    </div>
  );
};

export default Modal;
