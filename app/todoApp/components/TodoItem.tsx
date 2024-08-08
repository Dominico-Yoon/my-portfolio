import { FC } from "react";

interface Props {
  deleteTodo: (targetId: number) => void;
  item: Data;
}

const TodoItem: FC<Props> = ({ deleteTodo, item }) => {
  return (
    <div>
      <input type="checkbox" />
      <div>{item.todo}</div>
      <button onClick={() => deleteTodo(item.id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
