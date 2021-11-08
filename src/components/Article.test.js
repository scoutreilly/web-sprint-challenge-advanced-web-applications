import React from "react";
import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";
import MutationObserver from "mutationobserver-shim";

import Article from "./Article";
import { render, screen } from "react-dom";
import View from "./View";
import articleServices from "../services/articleServices.js";

// jest.mock("../services/articleServices.js");

let testArticle = {
  id: "yuWiP",
  headline:
    "Less than half of Seattle homes have air conditioning. After a deadly heat wave, ‘everybody’ wants it.",
  createdOn: "2021-11-04T22:32:25-06:00",
  author: "",
  image: 134,
  summary:
    "Triple-digit temperatures led to a spike in demand across the region.",
  body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home.",
};

// I am getting an error that says target container is not a DOM element. Unless I'm missing something ridiculous, I can't find any guidance anywhere on what this error means or why I'm getting it.
test("renders component without errors", () => {
  // articleServices.mockResolvedValueOnce({ data: [] });
  render(<Article key={2} article={testArticle} />);
});

// test("renders headline, author from the article when passed in through props", () => {
//   render(<Article />);
//   const headline = screen.findByTestId("headline");
//   const author = screen.findByTestId("author");
// });

// test('renders "Associated Press" when no author is given', ()=> {
// });

// test('executes handleDelete when the delete button is pressed', ()=> {
// });

//Task List:
//1. Complete all above tests. Create test article data when needed.
