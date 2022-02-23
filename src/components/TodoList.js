import React from "react"
import Todo from "./Todo"

// Creates array of Todo objects
const TodoList = ({ todoState: { todoList, setTodoList } }) => {
  // Creates new filtered list of todos and sets it to current list of todos
  const handleTodoRemove = (id) => {
    const newList = todoList.filter((todo) => todo.id !== id)
    setTodoList(newList)
  }

  // Changes todo from false to true and true to false on click
  const handlehandleCompleteTodo = (id) => {
    let updateTodo = todoList.map((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete
      }
      return todo
    })
    setTodoList(updateTodo)
  }

  return (
    <div>
      <ul className="todo-list">
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onRemove={handleTodoRemove}
            onComplete={handlehandleCompleteTodo}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
