import React, { useState } from "react"
import "./App.css"
import Form from "./components/Form"
import TodoList from "./components/TodoList"
import data from "./data.js"

const App = () => {
  const [todoList, setTodoList] = useState(data)

  return (
    <div>
      <h3 className="todo-app-headline">Todo app</h3>
      <Form todoState={{ todoList, setTodoList }} />
      <TodoList todoState={{ todoList, setTodoList }} />
    </div>
  )
}

export default App
