import { ChangeEvent, FC } from "react";

interface Props {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  newTodo: string;
  addTodo: () => void;
}

const TodoInput: FC<Props> = ({ newTodo, handleInputChange, addTodo }) => {
  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="새 할일을 입력하세요."
      />
      <button onClick={addTodo}>추가</button>
    </div>
  );
};

export default TodoInput;
