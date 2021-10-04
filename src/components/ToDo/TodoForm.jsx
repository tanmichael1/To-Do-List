import React from "react";
import { HiPencilAlt } from "react-icons/hi";

function TodoForm({ addTodo, listIndex }) {
  const [value, setValue] = React.useState("");
  var test = listIndex;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    if (value === " ") return;
    addTodo(value, test);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <span>
        <input
          type="text"
          id="inputdefault"
          className="todoInput"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="todoButton"
          style={{ color: "white", backgroundColor: "green" }}
          type="submit"
        >
          <HiPencilAlt size="30px" />
        </button>
      </span>
    </form>
  );
}

export default TodoForm;
