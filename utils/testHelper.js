export const findElementByTestAttribute = (component, attribute) => {
  return component.find(`[data-test='${attribute}']`);
};
