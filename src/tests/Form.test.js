import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { cleanup, render } from '@testing-library/react'
import Form from '../components/Form'

afterEach(cleanup)

describe('<Form />', () => {
  test('Renders component', async () => {
    const todoList = [{ id: 5, name: 'Take the dog out', complete: false }]
    const setTodoList = jest.fn()
    const component = render(<Form todoState={{ todoList, setTodoList }} />)
    component.rerender(<Form todoState={{ todoList, setTodoList }} />)

    expect(component.container).toHaveTextContent('Add new to-do')
  })
})
