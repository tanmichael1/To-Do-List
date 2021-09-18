import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
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

function App() {
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

  function addTodo(text, index) {
    var newTodos = [...todosList];
    var length = newTodos[index].todos.length;
    newTodos[index].todos.push({ text: text, isCompleted: false });
    setTodosList(newTodos);
  }

  function completeTodo(listIndex, itemIndex) {
    const newTodos = [...todosList];
    newTodos[listIndex].todos[itemIndex].isCompleted = true;
    setTodosList(newTodos);
  }

  function incompleteTodo(listIndex, itemIndex) {
    const newTodos = [...todosList];
    newTodos[listIndex].todos[itemIndex].isCompleted = false;
    setTodosList(newTodos);
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

  return (
    <div className="app">
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

                {todoitem.todos.map((todo, index) => (
                  <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    completeTodo={() => completeTodo(listIndex, index)}
                    incompleteTodo={() => incompleteTodo(listIndex, index)}
                    removeTodo={() => removeTodo(listIndex, index)}
                    editTodo={() => editTodo(listIndex, index)}
                  />
                ))}
                <TodoForm listIndex={listIndex} addTodo={addTodo} />
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
      <Footer />
    </div>
  );
}

export default App;
