"use client";

import { ChangeEvent, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const mockData: Data[] = [
  {
    id: 0,
    todo: "공부하기",
    isDone: true,
  },
  {
    id: 1,
    todo: "청소하기",
    isDone: false,
  },
  {
    id: 2,
    todo: "빨래하기",
    isDone: false,
  },
];

const TodoApp = () => {
  const [todos, setTodos] = useState<Data[]>(mockData);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: prevTodos.length, todo: newTodo, isDone: false },
      ]);
      setNewTodo("");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const updateTodo = (targetId: number) => {
    setTodos(
      todos.map((item) =>
        item.id === targetId ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const deleteTodo = (targetId: number) => {
    setTodos(todos.filter((item) => item.id !== targetId));
  };

  return (
    <div>
      <TodoInput
        handleInputChange={handleInputChange}
        newTodo={newTodo}
        addTodo={addTodo}
      />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoApp;
