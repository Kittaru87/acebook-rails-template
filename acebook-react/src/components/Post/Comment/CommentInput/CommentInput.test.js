import React from "react";
import { shallow } from "enzyme";
import CommentInput from "./CommentInput";
import { findByTestAttr } from "../../../../TestUtils/TestUtils";

const setup = () => {
  return shallow(<CommentInput />);
};

describe("CommentInput.js", () => {
  test("renders comment container correctly", () => {
    const wrapper = setup();
    const commentContainer = findByTestAttr(wrapper, "comment-container");
    expect(commentContainer.length).toBe(1);
  });
});
