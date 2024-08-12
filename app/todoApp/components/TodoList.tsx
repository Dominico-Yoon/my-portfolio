import { FC, useState } from "react";
import TodoItem from "./TodoItem";
import styles from "../todoApp.module.css";
import Modal from "./Modal";

interface Props {
  todos: Data[];
  setTodos: (todos: Data[] | ((prevTodo: Data[]) => Data[])) => void;
  deleteTodo: (targetId: number) => void;
}

const TodoList: FC<Props> = ({ todos, setTodos, deleteTodo }) => {
  const [selectedIds, setSelectedIds] = useState<number[]>(
    todos.filter((item) => item.isDone).map((item) => item.id)
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // 전체 선택/해제 기능
  const handleClickAllCheck = () => {
    // if (selectedIds.length === todos.length) {
    //   setSelectedIds([]); // 전체 선택 해제
    // } else {
    //   setSelectedIds(todos.map((item) => item.id));
    // }

    const allSelected = selectedIds.length === todos.length;
    setSelectedIds(allSelected ? [] : todos.map((item) => item.id));
  };

  // 특정 Todo 선택/해제 기능
  const handleSelectTodo = (id: number) => {
    // if (selectedIds.includes(id)) {
    //   setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    //   updateTodo(id);
    // } else {
    //   setSelectedIds([...selectedIds, id]);
    // }

    setSelectedIds((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((selectedId) => selectedId !== id)
        : [...prevSelected, id]
    );
  };

  // 선택 삭제 기능
  // 수정 필요
  const handleClickSelectDelete = () => {
    // selectedIds.forEach((id) => {
    //   deleteTodo(id);
    // });

    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    const remainingTodos = todos.filter(
      (todo) => !selectedIds.includes(todo.id)
    );
    setTodos(remainingTodos);
    alert("삭제 되었습니다.");
    setSelectedIds([]);

    setIsModalOpen(false);
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.todoList}>
      <div className={styles.btnContainer}>
        <button
          className={styles.selectAllBtn}
          onClick={handleClickAllCheck}
          disabled={todos.length === 0}
        >
          {selectedIds.length === todos.length ? "전체 해제" : "전체 선택"}
        </button>
        <button
          className={styles.selectDelBtn}
          onClick={handleClickSelectDelete}
          disabled={selectedIds.length === 0}
        >
          선택 삭제
        </button>
      </div>
      <div className={styles.todoListContainer}>
        {todos.map((item) => {
          return (
            <TodoItem
              key={item.id}
              deleteTodo={deleteTodo}
              item={item}
              isSelected={selectedIds.includes(item.id)}
              onSelect={() => handleSelectTodo(item.id)}
            />
          );
        })}
      </div>
      {isModalOpen && (
        <Modal
          title="선택한 할 일을 삭제 하시겠습니까?"
          handleConfirmDelete={confirmDelete}
          handleCancleDelete={cancelDelete}
        />
      )}
    </div>
  );
};

export default TodoList;
