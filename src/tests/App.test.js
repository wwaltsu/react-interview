import React from "react"
import App from "../App"
import "@testing-library/jest-dom/extend-expect"
import { cleanup, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

afterEach(cleanup)

describe("<App />", () => {
  let container

  beforeEach(() => {
    container = render(<App />).container
  })
  test("On default all todos should be incomplete ", () => {
    const completeTodo = container.querySelectorAll(".todo-complete")
    expect(completeTodo.length).toBe(0)
  })

  test("Complete button should set complete to true", () => {
    const button = container.querySelector("#complete-button")
    userEvent.click(button)
    const completeTodo = container.querySelectorAll(".todo-complete")
    expect(completeTodo.length).toBe(1)
  })

  test("When input is empty it should NOT add new todo", () => {
    const initialTodos = container.querySelectorAll(".todo-incomplete")
    const button = container.querySelector(".save-todo-btn")
    userEvent.click(button)
    const updatedTodos = container.querySelectorAll(".todo-incomplete")
    expect(updatedTodos.length).toBe(initialTodos.length)
  })

  test("Adding a new todo", () => {
    const input = container.querySelector(".input")
    const initialTodos = container.querySelectorAll(".todo-incomplete")
    const button = container.querySelector(".save-todo-btn")

    userEvent.type(input, "Take the dog out.")
    userEvent.click(button)

    const updatedTodos = container.querySelectorAll(".todo-incomplete")

    expect(updatedTodos.length).toBe(initialTodos.length + 1)
    expect(container).toHaveTextContent("Take the dog out.")
  })
})
