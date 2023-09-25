import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodos: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAddTodos }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        handleAddTodos(e);
        inputRef.current?.blur()
      }}
      className="input"
    >
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter a text"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
