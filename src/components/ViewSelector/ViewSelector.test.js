import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ViewSelector from "./ViewSelector";

test("calls onViewChange with correct value when list item is clicked", () => {
  const onViewChange = jest.fn();
  const { getByTestId } = render(<ViewSelector onViewChange={onViewChange} />);
  const gridListItem = screen.getByTestId("grid-list-item");

  fireEvent.click(gridListItem);

  expect(onViewChange).toHaveBeenCalledWith("grid");
});
