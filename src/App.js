import React, { useState } from "react"
import "./App.css"
import Form from "./components/Form"
import Todo from "./components/Todo"
const todos = [
  { id: 1, name: "Go to the supermarket", complete: false },
  { id: 2, name: "Call Alice", complete: false },
  { id: 3, name: "Ask Alice to call Bob", complete: false },
  { id: 4, name: "Do the dishes", complete: false },
  { id: 5, name: "Change car tyres", complete: false },
]

const App = () => {
  const [todoList, setTodoList] = useState(todos)
  const [newTodo, setNewTodo] = useState("")

  // Add a new todo to the list
  const addTodo = (event) => {
    event.preventDefault()
    const todoObject = {
      name: newTodo,
      complete: false,
      id: todoList.length + 1,
    }
    setTodoList(todoList.concat(todoObject))
    setNewTodo("")
  }

  // Creates array of Todo objects
  const List = ({ list, onRemove, onComplete }) => (
    <ul>
      {list.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
          onComplete={onComplete}
        />
      ))}
    </ul>
  )

  // Creates new filtered list of todos and sets it to current list of todos
  const handleTodoRemove = (id) => {
    const newList = todoList.filter((todo) => todo.id !== id)
    setTodoList(newList)
  }

  // Changes todo from false to true and true to false on click
  const completeTodo = (id) => {
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
      <Form handleSubmit={addTodo} newTodo={newTodo} setNewTodo={setNewTodo} />
      <div>
        <List
          list={todoList}
          onRemove={handleTodoRemove}
          onComplete={completeTodo}
        />
      </div>
    </div>
  )
}

export default App
