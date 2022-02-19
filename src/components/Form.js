import React from "react"

const Form = ({ handleSubmit, newTodo, setNewTodo }) => {
  // Form to create a new todo
  return (
    <div className="todo-txt">
      <form onSubmit={handleSubmit}>
        <h3>Add new Todo</h3>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default Form
