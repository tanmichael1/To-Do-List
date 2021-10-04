import React, { useState } from "react";
import "../App.css";
import Header from "../components/Header";
import Footer from "../components/footer/Footer";
import Todo from "../components/ToDo/Todo";
import TodoForm from "../components/ToDo/TodoForm";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

function TodoLists() {
  const [todosList, setTodosList] = React.useState([
    {
      title: "To-doList",
      todos: [
        {
          text: "Create to-do list",
          isCompleted: false,
        },
        {
          text: "Add items to to-do list",
          isCompleted: false,
        },
        {
          text: "Create another to-do list",
          isCompleted: false,
        },
      ],
    },
  ]);

  const [filter, setFilter] = useState("All Items");

  function addTodo(text, index) {
    var newTodos = [...todosList];
    newTodos[index].todos.push({ text: text, isCompleted: false });
    setTodosList(newTodos);
  }

  function completeTodo(listIndex, itemIndex, todo) {
    const newTodos = [...todosList];
    if (filter === "All Items") {
      newTodos[listIndex].todos[itemIndex].isCompleted = true;
      setTodosList(newTodos);
    } else {
      var realIndex = 0;
      var todotext = todo.text;
      var todoLength = todosList[listIndex].todos.length;
      for (var i = 0; i < todoLength; i++) {
        if (todosList[listIndex].todos[i].text === todotext) {
          realIndex = i;
        }
      }

      newTodos[listIndex].todos[realIndex].isCompleted = true;
      setTodosList(newTodos);
    }
  }

  function incompleteTodo(listIndex, itemIndex, todo) {
    const newTodos = [...todosList];
    if (filter === "All Items") {
      newTodos[listIndex].todos[itemIndex].isCompleted = false;
      setTodosList(newTodos);
    } else {
      var realIndex = 0;
      var todotext = todo.text;
      var todoLength = todosList[listIndex].todos.length;
      for (var i = 0; i < todoLength; i++) {
        if (todosList[listIndex].todos[i].text === todotext) {
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
      "Are you sure you want to remove this list?"
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
        {todosList.length === 0 ? (
          <div className="noLists">
            <h1>You have no notes.</h1>
          </div>
        ) : (
          <div className="todo-lists">
            {" "}
            {todosList.map((todoitem, listIndex) => (
              <div index={listIndex} className="todo-list">
                <span>
                  <h1>
                    {todoitem.title}{" "}
                    <button
                      onClick={() => editListTitle(listIndex)}
                      style={{ color: "white", backgroundColor: "blue" }}
                    >
                      <AiFillEdit />
                    </button>{" "}
                    <button
                      style={{ color: "white", backgroundColor: "red" }}
                      onClick={() => deleteList(listIndex)}
                    >
                      <AiFillDelete />
                    </button>
                  </h1>{" "}
                </span>
                {todoitem.todos
                  .filter(function (todo) {
                    console.log(filter);
                    console.log(todo);
                    if (filter === "All Items") {
                      return true;
                    } else if (filter === "Completed") {
                      if (todo.isCompleted) {
                        return true;
                      }
                    } else if (filter === "Active") {
                      if (!todo.isCompleted) {
                        return true;
                      }
                    }
                    return false;
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
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer addList={addList} changeFilter={changeFilter} filter={filter} />
    </div>
  );
}

export default TodoLists;
