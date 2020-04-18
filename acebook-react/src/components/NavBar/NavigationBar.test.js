import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../TestUtils/TestUtils";
import NavBar from "./NavigationBar";

const setup = () => {
  return shallow(<NavBar />);
};

describe("NavigationBar.js", () => {
  test("renders without error", () => {
    const wrapper = setup();
    const navBarComponent = findByTestAttr(wrapper, "component-navBar");
    expect(navBarComponent.length).toBe(1);
  });
});
