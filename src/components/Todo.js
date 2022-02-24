import React from "react"
import { GoTrashcan } from "react-icons/go"
import { MdDoneOutline } from "react-icons/md"
const Todo = ({ todo, onComplete, onRemove }) => (
  // Creates an array of objects of todos

  <div
    key={todo.id}
    className={` ${todo.complete ? "todo-complete" : "todo-incomplete"}`}
  >
    <div>{todo.name}</div>
    <div>
      <button
        className="button-style"
        id="complete-button"
        type="button"
        onClick={() => onComplete(todo.id)}
      >
        <MdDoneOutline />
      </button>
      <button
        className="button-style"
        id="remove-button"
        type="button"
        onClick={() => onRemove(todo.id)}
      >
        <GoTrashcan />
      </button>
    </div>
  </div>
)

export default Todo
