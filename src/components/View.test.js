import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import View from "./View";

test("renders zero articles without errors", async () => {
  render(<View />);
});

// test("renders three articles without errors", async ()=> {
//   render(<View />)
// });

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.
