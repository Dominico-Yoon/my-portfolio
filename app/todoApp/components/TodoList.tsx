import { FC } from "react";
import TodoItem from "./TodoItem";

interface Props {
  todos: Data[];
  updateTodo: (targetId: number) => void;
  deleteTodo: (targetId: number) => void;
}

const TodoList: FC<Props> = ({ todos, updateTodo, deleteTodo }) => {
  return (
    <div>
      {todos.map((item) => {
        return (
          <TodoItem
            key={item.id}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            item={item}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
