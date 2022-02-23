import React from "react"
import { render, screen, cleanup, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Form from "../components/Form"
import userEvent from "@testing-library/user-event"
import { jest } from "@jest/globals"

afterEach(cleanup)

test("Input should have value after typing to it", () => {
  const todoList = ""
  const setTodoList = jest.fn()

  render(<Form todoState={{ todoList, setTodoList }} />)

  const inputEl = screen.getByTestId("todo-input")

  userEvent.type(inputEl, "Testing an input form")
  expect(screen.getByTestId("todo-input")).toHaveValue("Testing an input form")
})
