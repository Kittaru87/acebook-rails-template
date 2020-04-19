import React from "react";
import { shallow, mount } from "enzyme";
import About from "./About";
import { findByTestAttr } from "../../../TestUtils/TestUtils";
import PostContext from "../../../context/Post/PostContext";

/**
 * @function setup function for About component
 * @returns {ShallowWrapper}
 */
const setup = (something) => {
  return mount(
    <PostContext.Provider value={something}>
      <About />
    </PostContext.Provider>
  );
};

describe("About.js", () => {
  test("outer container renders correctly", () => {
    const wrapper = setup({ something: "hello" });
    const component = findByTestAttr(wrapper, "about-container");
    expect(component.length).toBe(1);
  });
  test("changes value of something to Nima", () => {
    const wrapper = setup({ something: "Nima" });
    const component = findByTestAttr(wrapper, "value-container");
    expect(component.text()).toContain("Nima");
  });
});
