import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../TestUtils/TestUtils";
import BootStrapCard from "./BootStrapCard";

const defaultProps = {
  post: {
    id: 1,
    message: "this is a great post",
    date_created: "2020-01-06",
    date_updated: "2020-01-08",
  },
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<BootStrapCard {...setupProps} />);
};

describe("BootStrapCard.js", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("Card renders correctly", () => {
    const cardContainer = findByTestAttr(wrapper, "card-container");
    expect(cardContainer.length).toBe(1);
  });
  test("message container is rendered correctly", () => {
    const cardMessageContainer = findByTestAttr(wrapper, "message-container");
    expect(cardMessageContainer.length).toBe(1);
  });
  test("correct message is displayed", () => {
    const cardMessageContainer = findByTestAttr(wrapper, "message-container");
    expect(cardMessageContainer.text()).toContain(defaultProps.post.message);
  });
});

test("does not throw error with expected props", () => {
  const expectedProps = {
    post: {
      id: 1,
      message: "this is a great post",
      date_created: "2020-01-06",
      date_updated: "2020-01-08",
    },
  };
  checkProps(BootStrapCard, expectedProps);
});
