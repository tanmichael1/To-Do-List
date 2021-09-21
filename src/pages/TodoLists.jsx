import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { IoIosCheckmarkCircle } from "react-icons/fa";

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
      {todo.text}
      <div>
        {todo.isCompleted ? (
          <button onClick={() => incompleteTodo(index)}>
            Mark as Incomplete
          </button>
        ) : (
          <button
            style={{ color: "white", backgroundColor: "green" }}
            onClick={() => completeTodo(index)}
          >
            Mark as Complete
          </button>
        )}

        <button
          style={{ color: "white", backgroundColor: "red" }}
          onClick={() => removeTodo(index)}
        >
          x
        </button>
        <button
          style={{ color: "white", backgroundColor: "blue" }}
          onClick={() => editTodo(index)}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

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
      <button
        style={{ color: "white", backgroundColor: "green" }}
        type="submit"
      >
        Submit{" "}
      </button>
    </form>
  );
}

function Tabs({ changeFilter, filter }) {
  return (
    <div className="tabs">
      <button
        onClick={() => changeFilter("All Items")}
        defaultValue="true"
        type="button"
        style={{ flex: 1 }}
        // className="btn btn-primary btn-lg"
      >
        All Items
      </button>
      <button
        onClick={() => changeFilter("Active")}
        type="button"
        style={{ flex: 1 }}
      >
        Active
      </button>
      <button
        onClick={() => changeFilter("Completed")}
        type="button"
        style={{ flex: 1 }}
      >
        Completed
      </button>
      <br />
      Current: {filter}
    </div>
  );
}

function TodoLists() {
  const [todosList, setTodosList] = React.useState([
    {
      title: "To-doList",
      todos: [
        {
          text: "Learn about React",
          isCompleted: false,
        },
        {
          text: "Meet friend for lunch",
          isCompleted: false,
        },
        {
          text: "Build really cool todo app",
          isCompleted: false,
        },
      ],
    },
    {
      title: "Other List",
      todos: [
        {
          text: "Learn about React",
          isCompleted: false,
        },
        {
          text: "Meet friend for lunch",
          isCompleted: false,
        },
        {
          text: "Build really cool todo app",
          isCompleted: false,
        },
      ],
    },
  ]);

  const [filter, setFilter] = useState("All Items");

  function addTodo(text, index) {
    var newTodos = [...todosList];
    var length = newTodos[index].todos.length;
    newTodos[index].todos.push({ text: text, isCompleted: false });
    setTodosList(newTodos);
  }

  function completeTodo(listIndex, itemIndex, todo) {
    const newTodos = [...todosList];
    if (filter == "All Items") {
      newTodos[listIndex].todos[itemIndex].isCompleted = true;
      setTodosList(newTodos);
    } else {
      var realIndex = 0;
      var todotext = todo.text;
      var todoLength = todosList[listIndex].todos.length;
      for (var i = 0; i < todoLength; i++) {
        if (todosList[listIndex].todos[i].text == todotext) {
          realIndex = i;
        }
      }

      newTodos[listIndex].todos[realIndex].isCompleted = true;
      setTodosList(newTodos);
    }
  }

  function incompleteTodo(listIndex, itemIndex, todo) {
    const newTodos = [...todosList];
    if (filter == "All Items") {
      newTodos[listIndex].todos[itemIndex].isCompleted = false;
      setTodosList(newTodos);
    } else {
      var realIndex = 0;
      var todotext = todo.text;
      var todoLength = todosList[listIndex].todos.length;
      for (var i = 0; i < todoLength; i++) {
        if (todosList[listIndex].todos[i].text == todotext) {
          realIndex = i;
        }
      }

      newTodos[listIndex].todos[realIndex].isCompleted = false;
      setTodosList(newTodos);
    }
  }

  function removeTodo(listIndex, itemIndex) {
    const newTodos = [...todosList];
    newTodos[listIndex].todos.splice(itemIndex, 1);
    setTodosList(newTodos);
  }

  function editTodo(listIndex, itemIndex) {
    const newTodos = [...todosList];
    let newMessage = prompt("What do you want to change the text to?");
    if (newMessage) {
      newTodos[listIndex].todos[itemIndex].text = newMessage;
      setTodosList(newTodos);
    }
  }

  function addList() {
    const newTodos = [...todosList];
    let listTitle = prompt("What would you like to call your new list?");
    if (listTitle) {
      newTodos.push({ title: listTitle, todos: [] });
      setTodosList(newTodos);
    }
  }

  function editListTitle(listIndex) {
    const newTodos = [...todosList];
    let listTitle = prompt("What would you change the list name to?");
    if (listTitle) {
      newTodos[listIndex].title = listTitle;

      setTodosList(newTodos);
    }
  }

  function deleteList(listIndex) {
    const newTodos = [...todosList];
    let deleteConfirmation = window.confirm(
      "Are you sure you want to remove this list of notes?"
    );
    if (deleteConfirmation) {
      newTodos.splice(listIndex, 1);
      setTodosList(newTodos);
    }
  }
  function changeFilter(newFilter) {
    setFilter(newFilter);
  }

  return (
    <div>
      <Header />
      <div className="listarea">
        {todosList.length == 0 ? (
          <div>
            <h1>You have no notes.</h1>
          </div>
        ) : (
          <div className="todo-lists">
            {" "}
            {todosList.map((todoitem, listIndex) => (
              <div index={listIndex} className="todo-list">
                <h1>{todoitem.title}</h1>

                {todoitem.todos
                  .filter(function (todo) {
                    console.log(filter);
                    console.log(todo);
                    if (filter == "All Items") {
                      return true;
                    } else if (filter == "Completed") {
                      if (todo.isCompleted) {
                        return true;
                      }
                    } else if (filter == "Active") {
                      console.log("here");
                      if (!todo.isCompleted) {
                        return true;
                      }
                    }
                  })
                  .map((todo, index) => (
                    <Todo
                      key={index}
                      index={index}
                      todo={todo}
                      completeTodo={() => completeTodo(listIndex, index, todo)}
                      incompleteTodo={() =>
                        incompleteTodo(listIndex, index, todo)
                      }
                      removeTodo={() => removeTodo(listIndex, index)}
                      editTodo={() => editTodo(listIndex, index)}
                    />
                  ))}
                <TodoForm listIndex={listIndex} addTodo={addTodo} />
                <div className="taskNumbers">
                  <div>Total Tasks: {todoitem.todos.length} </div>
                  <div>
                    Active Tasks:{" "}
                    {todoitem.todos.filter((todo) => !todo.isCompleted).length}
                  </div>
                  <div>
                    Completed Tasks:{" "}
                    {todoitem.todos.filter((todo) => todo.isCompleted).length}{" "}
                  </div>
                  <hr />
                  <button
                    onClick={() => editListTitle(listIndex)}
                    style={{ color: "white", backgroundColor: "blue" }}
                  >
                    Edit List Title{" "}
                  </button>
                  <button
                    style={{ color: "white", backgroundColor: "red" }}
                    onClick={() => deleteList(listIndex)}
                  >
                    Delete List
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="addList">
          <button
            id="addListButton"
            className="btn btn-primary btn-lg"
            onClick={() => addList()}
          >
            +
          </button>
        </div>
      </div>
      <Tabs changeFilter={changeFilter} filter={filter} />
      <Footer />
    </div>
  );
}

export default TodoLists;
