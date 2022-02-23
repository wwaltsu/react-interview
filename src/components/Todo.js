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
        type="button"
        id="onComplete"
        onClick={() => onComplete(todo.id)}
      >
        <MdDoneOutline />
      </button>
      <button
        className="button-style"
        type="button"
        id="onRemove"
        onClick={() => onRemove(todo.id)}
      >
        <GoTrashcan id="complete-btn" />
      </button>
    </div>
  </div>
)

export default Todo
