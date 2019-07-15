import React from "react";
import { shallow } from "enzyme";
import { findElementByTestAttribute } from "../../../utils/testHelper";
import Button from "./Button";

describe("Button component", () => {
  let wrapper;
  const buttonText = "Test text";

  beforeEach(() => {
    const props = {
      buttonText,
      emitEvent: () => {}
    };
    wrapper = shallow(<Button {...props} />);
  });

  it("Should render Button", () => {
    const button = findElementByTestAttribute(wrapper, "buttonComponent");
    expect(button.length).toBe(1);
  });

  it("Should use buttonText as Button's text", () => {
    const button = findElementByTestAttribute(wrapper, "buttonComponent");
    expect(button.html().includes(">Test text<")).toBe(true);
  });
});
