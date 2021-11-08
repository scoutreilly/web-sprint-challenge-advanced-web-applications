import React from "react";
import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";
import MutationObserver from "mutationobserver-shim";

import Article from "./Article";
import { render, screen } from "react-dom";
import View from "./View";
import articleServices from "../services/articleServices.js";

// I am getting an error that says target container is not a DOM element. Unless I'm missing something ridiculous, I can't find any guidance anywhere on what this error means or why I'm getting it.
test("renders component without errors", () => {
  render(<Article />);
  // articleServices.mockResolvedValueOnce({ data: [] });
  // const { rerender } = render(<Article article={[]} />);
});

// test("renders headline, author from the article when passed in through props", () => {
//   render(<Article />);
//   const headline = screen.findByTestId("headline");
//   const author = screen.findByTestId("author");
// });

// test('renders "Associated Press" when no author is given', () => {
// });

// test("executes handleDelete when the delete button is pressed", () => {
// });

//Task List:
//1. Complete all above tests. Create test article data when needed.
