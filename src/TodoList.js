import React from "react";
import ToDo from "./ToDo";

export default function TodoList({ todos, toggleToDos }) {
  return todos.map((todo) => {
    return <ToDo key={todo.id} todo={todo} toggleToDos={toggleToDos} />;
  });
}
