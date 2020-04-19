import React from "react";
import { mount } from "enzyme";
import { findByTestAttr } from "../../../TestUtils/TestUtils";
import Home from "./Home";
import PostContext from "../../../context/Post/PostContext";

const state = {
  posts: [
    {
      id: 1,
      message: "this is a great post",
      date_created: "2020-01-06",
      date_updated: "2020-01-08",
    },
    {
      id: 2,
      message: "this is a post that goes on and on and on",
      date_created: "2020-02-06",
      date_updated: "2020-03-08",
    },
    {
      id: 3,
      message: "a brilliant time is to be had here",
      date_created: "2020-02-04",
      date_updated: "2020-03-09",
    },
  ],
  something: "Nima",
};

const setup = (something) => {
  return mount(
    <PostContext.Provider value={something}>
      <Home />
    </PostContext.Provider>
  );
};

describe("Home.js", () => {
  test("renders Home page correctly", () => {
    const wrapper = setup(state);
    const homeContainer = findByTestAttr(wrapper, "home-container");
    expect(homeContainer.length).toBe(1);
  });

  test("renders correct amount of posts, in this case, 3", () => {
    const wrapper = setup(state);
    const postIndividual = findByTestAttr(wrapper, "post-individual");
    expect(postIndividual.length).toBe(3);
  });
});
