import React from "react"

const Todo = ({ todo, onComplete, onRemove }) => (
  // Creates an array of objects of todos
  <div
    key={todo.id}
    className={` ${todo.complete ? "todo-complete" : "todo-incomplete"}`}
  >
    <div>{todo.name}</div>
    <div>
      <button type="button" onClick={() => onComplete(todo.id)}>
        Completed
      </button>
      <button type="button" onClick={() => onRemove(todo.id)}>
        Remove
      </button>
    </div>
  </div>
)

export default Todo
