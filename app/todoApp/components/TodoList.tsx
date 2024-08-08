import { FC } from "react";
import TodoItem from "./TodoItem";

interface Props {
  todos: Data[];
  deleteTodo: (targetId: number) => void;
}

const TodoList: FC<Props> = ({ todos, deleteTodo }) => {
  return (
    <div>
      {todos.map((item) => {
        return (
          <div key={item.id}>
            <TodoItem deleteTodo={deleteTodo} item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
