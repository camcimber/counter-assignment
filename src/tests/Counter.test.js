// import necessary react testing library helpers here
// import the Counter component here
import Counter from '../components/Counter';
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

let container = null;
beforeEach(() => {
  // Render the Counter component here
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />, container);
  const counterMessage = screen.getByText(/counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />, container);
  const initialCount = screen.getByTestId("count");
  expect(initialCount).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />, container);
  const incrementButton = screen.getByText("+");
  fireEvent.click(incrementButton);

  const updatedCount = screen.getByTestId("count");
  expect(updatedCount).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />, container);
  const decrementButton = screen.getByText("-");
  fireEvent.click(decrementButton);

  const updatedCount = screen.getByTestId("count");
  expect(updatedCount).toHaveTextContent("-1");
});

