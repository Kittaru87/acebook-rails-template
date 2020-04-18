import React from "react";
import { shallow } from "enzyme";
import NavBarIcons from "./NavigationBarIcons";
import { findByTestAttr } from "../../../TestUtils/TestUtils";

const setup = () => {
  return shallow(<NavBarIcons />);
};

describe("NavigationBarIcons.js", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test("renders icons container", () => {
    const component = findByTestAttr(wrapper, "component-icons");
    expect(component.length).toBe(1);
  });
  test("renders home icon correctly", () => {
    const homeIcon = findByTestAttr(wrapper, "home-icon");
    expect(homeIcon.length).toBe(1);
  });
  test("renders edit icon correctly", () => {
    const editIcon = findByTestAttr(wrapper, "edit-icon");
    expect(editIcon.length).toBe(1);
  });
  test("renders logout icon correctly", () => {
    const logoutIcon = findByTestAttr(wrapper, "logout-icon");
    expect(logoutIcon.length).toBe(1);
  });
});
