import React from "react"
import { render, screen, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Form from "../components/Form"
import userEvent from "@testing-library/user-event"
import { jest } from "@jest/globals"
import TodoList from "../components/TodoList"

afterEach(cleanup)

test("TodoList container", () => {
  const todoList = jest.fn()
  const setTodoList = jest.fn()
  //<Form todoState={{ todoList, setTodoList }}>
  const component = render(<TodoList todoState={{ todoList, setTodoList }} />)
  component.rerender(<TodoList todoState={{ todoList, setTodoList }} />)

  expect(component).toHaveTextContent("testing a form...")
})
