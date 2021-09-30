import React from "react";
import { HiPencilAlt } from "react-icons/hi";

function TodoForm({ addTodo, listIndex }) {
  const [value, setValue] = React.useState("");
  var test = listIndex;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    if (value == " ") return;
    addTodo(value, test);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {"  "}
      <button
        style={{ color: "white", backgroundColor: "green" }}
        type="submit"
      >
        <HiPencilAlt />
      </button>
    </form>
  );
}

export default TodoForm;
