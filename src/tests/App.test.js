import React from "react"
import App from "../App"
import "@testing-library/jest-dom/extend-expect"
import { cleanup, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

afterEach(cleanup)

describe("<App />", () => {
  test("On default all todos should be incomplete ", () => {
    const component = render(<App />)

    const completeTodo = component.container.querySelectorAll(".todo-complete")
    expect(completeTodo.length).toBe(0)
  })

  test("Complete button should set complete to true", () => {
    const component = render(<App />)

    const button = component.container.querySelector("#complete-button")
    userEvent.click(button)
    const completeTodo = component.container.querySelectorAll(".todo-complete")
    expect(completeTodo.length).toBe(1)
  })

  test("When input is empty it should NOT add new todo", () => {
    const component = render(<App />)

    const allTodos = component.container.querySelectorAll(".todo-incomplete")
    const button = component.container.querySelector(".save-todo-btn")
    userEvent.click(button)
    const newAllTodos = component.container.querySelectorAll(".todo-incomplete")
    expect(newAllTodos.length).toBe(allTodos.length)
  })

  test("Adding a new todo", () => {
    const component = render(<App />)
    const input = component.container.querySelector(".input")
    const allTodos = component.container.querySelectorAll(".todo-incomplete")
    const button = component.container.querySelector(".save-todo-btn")

    userEvent.type(input, "Take the dog out.")
    userEvent.click(button)

    const newAllTodos = component.container.querySelectorAll(".todo-incomplete")

    expect(newAllTodos.length).toBe(allTodos.length + 1)
    expect(component.container).toHaveTextContent("Take the dog out.")
  })
})
