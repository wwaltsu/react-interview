import React from "react"
import App from "../App"
import "@testing-library/jest-dom/extend-expect"
import { cleanup, render } from "@testing-library/react"

afterEach(cleanup)

describe("<App />", () => {
  test("Testing text content", async () => {
    const component = render(<App />)
    component.rerender(<App />)

    expect(component.container).toHaveTextContent("To-Do App")
  })
})
