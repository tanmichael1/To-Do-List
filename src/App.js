// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css";

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
          <button onClick={() => completeTodo(index)}>Mark as Complete</button>
        )}

        <button onClick={() => removeTodo(index)}>x</button>
        <button onClick={() => editTodo(index)}>Edit</button>
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
      <button type="submit">Submit </button>
    </form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([]);

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
    setTodos(newTodos);
  }

  function incompleteTodo(listIndex, itemIndex) {
    const newTodos = [...todosList];
    newTodos[listIndex].todos[itemIndex].isCompleted = false;
    setTodos(newTodos);
  }

  function removeTodo(listIndex, itemIndex) {
    const newTodos = [...todosList];
    newTodos[listIndex].todos.splice(itemIndex, 1);
    setTodos(newTodos);
  }

  function editTodo(listIndex, itemIndex) {
    const newTodos = [...todosList];
    let newMessage = prompt("What do you want to change the text to?");
    if (newMessage) {
      newTodos[listIndex].todos[itemIndex].text = newMessage;
      setTodos(newTodos);
    }
  }

  return (
    <div className="app">
      <h1>To-do List</h1>
      <div className="todo-lists">
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
