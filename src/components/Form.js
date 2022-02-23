import React, { useState } from "react"

const Form = ({ todoState: { todoList, setTodoList } }) => {
  const [newTodo, setNewTodo] = useState("")

  // Add a new todo to the list
  const handleSubmit = (event) => {
    event.preventDefault()
    const todoObject = {
      name: newTodo,
      complete: false,
      id: todoList.length + 1,
    }
    if (todoObject.name !== "") {
      setTodoList(todoList.concat(todoObject))
      setNewTodo("")
    }
  }
  // Form to create a new todo
  return (
    <div className="todo-txt">
      <form onSubmit={handleSubmit}>
        <label className="add-new-text">Add new to-do</label>
        <div className="inputAndButton">
          <input
            id="todo-input"
            className="input"
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Input to-do text here"
          />
          <button className="save-todo-btn" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
