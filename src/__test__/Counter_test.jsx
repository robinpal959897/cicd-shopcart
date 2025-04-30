import { render, screen, fireEvent } from '@testing-library/react'
import Counter from '../components/Counter'

test('increments counter on button click', () => {
  render(<Counter />)

  const button = screen.getByText('Increment')
  fireEvent.click(button)

  const countText = screen.getByTestId('count')
  expect(countText).toHaveTextContent('Count: 1')
})
