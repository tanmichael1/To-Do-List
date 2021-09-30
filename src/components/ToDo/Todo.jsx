import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { GoCircleSlash } from "react-icons/go";

function Todo({
  todo,
  index,
  completeTodo,
  incompleteTodo,
  removeTodo,
  editTodo,
}) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <p>{todo.text} </p>
      <div>
        {todo.isCompleted ? (
          <button onClick={() => incompleteTodo(index)}>
            <GoCircleSlash />
          </button>
        ) : (
          <button
            style={{ color: "white", backgroundColor: "green" }}
            onClick={() => completeTodo(index)}
          >
            <FaCheckCircle />
          </button>
        )}

        <button
          style={{ color: "white", backgroundColor: "red" }}
          onClick={() => removeTodo(index)}
        >
          <AiFillDelete />
        </button>
        <button
          style={{ color: "white", backgroundColor: "blue" }}
          onClick={() => editTodo(index)}
        >
          <AiFillEdit />
        </button>
      </div>
    </div>
  );
}

export default Todo;
