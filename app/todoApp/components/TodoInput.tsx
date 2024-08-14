import { ChangeEvent, FC, KeyboardEvent } from "react";
import styles from "../todoApp.module.css";

interface Props {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  newTodo: string;
  addTodo: () => void;
}

const TodoInput: FC<Props> = ({ newTodo, handleInputChange, addTodo }) => {
  // 엔터 누를 시 todo 생성 하는 함수
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // 기본 엔터 동작 막기
      e.preventDefault();

      addTodo();
    }
  };

  return (
    <div className={styles.todoInput}>
      <div className={styles.todoInputContainer}>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="새 할일을 입력하세요."
        />
        <button className={styles.addBtn} onClick={addTodo}>
          추가
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
