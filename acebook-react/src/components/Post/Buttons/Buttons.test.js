import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../TestUtils/TestUtils";
import Buttons from "./Buttons";

const setup = () => {
  return shallow(<Buttons />);
};

describe("Buttons.js", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test("renders Edit button correctly", () => {
    const editContainer = findByTestAttr(wrapper, "edit-container");
    expect(editContainer.length).toBe(1);
  });

  test("renders Comment button correctly", () => {
    const commentContainer = findByTestAttr(wrapper, "comment-container");
    expect(commentContainer.length).toBe(1);
  });

  test("renders Delete button correctly", () => {
    const deleteContainer = findByTestAttr(wrapper, "delete-container");
    expect(deleteContainer.length).toBe(1);
  });
});
