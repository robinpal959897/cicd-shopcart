import { render, screen } from '@testing-library/react'
import App from '../App' // Make sure the import path is correct

test('renders the heading', () => {
  render(<App />)
  expect(screen.getByText(/hello/i)).toBeInTheDocument()
})
