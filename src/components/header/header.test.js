import React from "react";
import { shallow } from "enzyme";
import { findElementByTestAttribute } from "../../../utils/testHelper";
import Header from "./Header";

const setupComponent = (props = {}) => {
  return shallow(<Header {...props} />);
};

describe("Header component", () => {
  let component;
  beforeEach(() => {
    component = setupComponent();
  });

  it("Should render component without errors", () => {
    const wrapperElement = findElementByTestAttribute(
      component,
      "headerComponent"
    );
    expect(wrapperElement.length).toBe(1);
  });

  it("Should render logo without errors", () => {
    const wrapperElement = findElementByTestAttribute(component, "logo");
    expect(wrapperElement.length).toBe(1);
  });
});
