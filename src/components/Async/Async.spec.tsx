import { queryByText, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { Async } from '.';

test('it renders correctly', async () => {
  render(<Async />)

  expect(screen.getByText("Hello world")).toBeInTheDocument()
  // expect(await screen.findByText("Button")).toBeInTheDocument()

  
  await waitFor(() => {
      return expect(screen.queryByText("Button")).toBeInTheDocument()
    })
    
  // await waitForElementToBeRemoved(screen.queryByText("Button"))

  })