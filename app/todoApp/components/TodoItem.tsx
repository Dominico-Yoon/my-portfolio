import { ChangeEvent, FC, useState } from "react";
import styles from "../todoApp.module.css";
import Modal from "./Modal";
interface Props {
  deleteTodo: (targetId: number) => void;
  onSelect: () => void;
  isSelected: boolean;
  item: Data;
}

const TodoItem: FC<Props> = ({ deleteTodo, onSelect, isSelected, item }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleClickDelete = () => {
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    if (isSelected) {
      deleteTodo(item.id);
      alert("삭제 되었습니다.");
    } else {
      alert("해야 할 일이 끝나지 않았습니다. 체크 후 다시 클릭해 주세요.");
      return;
    }

    setIsModalOpen(false);
  };

  const cancleDelete = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.todoItem}>
      <input type="checkbox" onChange={onSelect} checked={isSelected} />
      <div className={isSelected ? styles.done : ""}>{item.todo}</div>
      <button className={styles.itemDelBtn} onClick={handleClickDelete}>
        삭제
      </button>

      {isModalOpen && (
        <Modal
          title="할 일을 삭제 하시겠습니까?"
          handleConfirmDelete={confirmDelete}
          handleCancleDelete={cancleDelete}
        />
      )}
    </div>
  );
};

export default TodoItem;
