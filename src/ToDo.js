import React from "react";

export default function ToDo({ todo, toggleToDos }) {
  function handleToDoClick() {
    toggleToDos(todo.id);
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleToDoClick}
        ></input>
        {todo.name}
      </label>
    </div>
  );
}
