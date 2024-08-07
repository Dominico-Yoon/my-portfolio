"use client";

import { ChangeEvent, useState } from "react";

interface Data {
  id: number;
  todo: string;
  isDone: boolean;
}

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

  const deleteTodo = (targetId: number) => {
    setTodos(todos.filter((item) => item.id !== targetId));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="새 할일을 입력하세요."
        />
        <button onClick={addTodo}>추가</button>
      </div>
      <div>
        {todos.map((item) => {
          return (
            <div key={item.id}>
              <input type="checkbox" />
              <div>{item.todo}</div>
              <button onClick={() => deleteTodo(item.id)}>삭제</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoApp;
