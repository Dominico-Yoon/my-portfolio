import { ChangeEvent, FC } from "react";

interface Props {
  updateTodo: (targetId: number) => void;
  deleteTodo: (targetId: number) => void;
  item: Data;
}

const TodoItem: FC<Props> = ({ updateTodo, deleteTodo, item }) => {
  const checkChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateTodo(item.id);
  };

  return (
    <div>
      <input type="checkbox" onChange={checkChange} checked={item.isDone} />
      <div>{item.todo}</div>
      <button onClick={() => deleteTodo(item.id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
