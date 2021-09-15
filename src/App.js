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

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
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
  const [todos, setTodos] = React.useState([
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
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    console.log(newTodos[index].isCompleted);

    setTodos(newTodos);
    console.log(newTodos);
    console.log(newTodos.filter((todo) => todo.completed).length);
  };

  const incompleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = false;
    console.log(newTodos[index].isCompleted);
    setTodos(newTodos);
    console.log(newTodos);
    console.log(newTodos.filter((todo) => !todo.completed).length);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    const newTodos = [...todos];
    let newMessage = prompt("What do you want to change the text to?");
    if (newMessage) {
      newTodos[index].text = newMessage;
      setTodos(newTodos);
    }
  };

  // Toggle completed state of todo item
  const markComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="app">
      <h1>To-do List</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            incompleteTodo={incompleteTodo}
            // markComplete={markComplete}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
        <div>Total Tasks: {todos.length} </div>
        <div>
          Active Tasks: {todos.filter((todo) => !todo.completed).length}
        </div>
        <div>
          Completed Tasks: {todos.filter((todo) => todo.completed).length}{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
