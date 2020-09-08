import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { uuid } from "uuid/dist/v4";

function App() {
  const [todos, setToDos] = useState([]);
  const todoNameRef = useRef();
  const LOCAL_STORAGE_KEY = "todoApp.todos";

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setToDos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleToDos(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setToDos(newTodos);
  }

  function handleAddToDo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setToDos((prevTodo) => {
      return [...prevTodo, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  function handleClearToDos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setToDos(newTodos);
  }

  return (
    <>
      <TodoList todos={todos} toggleToDos={toggleToDos} />
      <input ref={todoNameRef} type="text"></input>
      <button onClick={handleAddToDo}>Add "ToDo"</button>
      <button onClick={handleClearToDos}>Clear completed "ToDo`s"</button>
      <div> {todos.filter((todo) => !todo.complete).length} left "ToDo`s"</div>
    </>
  );
}

export default App;
