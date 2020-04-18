import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../TestUtils/TestUtils";
import Profile from "./Profile";

const setup = () => {
  return shallow(<Profile />);
};

describe("Profile.js", () => {
  test("renders main container correctly", () => {
    const wrapper = setup();
    const profileContainer = findByTestAttr(wrapper, "profile-container");
    expect(profileContainer.length).toBe(1);
  });
});
