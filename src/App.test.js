import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders title text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Crypto Tracker/i);
  expect(linkElement).toBeInTheDocument();
});
