import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { cleanup, render } from "@testing-library/react"
import TodoList from "../components/TodoList"

afterEach(cleanup)

describe("<TodoList />", () => {
  test("Testing list item", async () => {
    const todoList = [{ id: 5, name: "Take the dog out", complete: false }]
    const setTodoList = jest.fn()
    const component = render(<TodoList todoState={{ todoList, setTodoList }} />)
    component.rerender(<TodoList todoState={{ todoList, setTodoList }} />)

    expect(component.container).toHaveTextContent("Take the dog out")
  })
})
