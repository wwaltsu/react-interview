import React from "react"
import { render, screen, cleanup, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Form from "../components/Form"
import userEvent from "@testing-library/user-event"
import { jest } from "@jest/globals"

afterEach(cleanup)

test("Form updates state when save button is clicked", () => {
  const todoList = ""
  const setTodoList = jest.fn()
  const component = render(<Form todoState={{ todoList, setTodoList }} />)
  const form = component.container.querySelector("#todo-input")
  const input = screen.getByPlaceholderText("Input to-do text here")
  userEvent.type(input, "testing an input...")
  expect(form).toHaveTextContent("testing an input...")
})
