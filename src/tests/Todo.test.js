import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Todo from "../components/Todo"

// ...
//const Todo = ({ todo, onComplete, onRemove }) => (
test("clicking the button calls event handler once", async () => {
  const todo = {
    id: 1,
    name: "Component testing is done with react-testing-library",
    important: true,
  }

  const onComplete = jest.fn()
  const onRemove = jest.fn()

  const { content } = render(
    <Todo todo={todo} onComplete={onComplete} onRemove={onRemove} />
  )

  const button = content.querySelector("#onComplete")

  userEvent.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)
})
