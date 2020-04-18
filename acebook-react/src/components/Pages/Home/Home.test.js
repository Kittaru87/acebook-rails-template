import React from "react";
import { mount } from "enzyme";
import { findByTestAttr } from "../../../TestUtils/TestUtils";
import Home from "./Home";
import PostContext from "../../../context/Post/PostContext";

const setup = ({ something }) => {
  return mount(
    <PostContext.Provider value={something}>
      <Home />
    </PostContext.Provider>
  );
};

describe("Home.js", () => {
  test("renders Home page correctly", () => {
    const wrapper = setup({ something: "Nima" });
    const homeContainer = findByTestAttr(wrapper, "home-container");
    expect(homeContainer.length).toBe(1);
  });
});
