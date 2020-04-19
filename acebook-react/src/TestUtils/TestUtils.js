import checkPropTypes from "check-prop-types";

/**
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {val} string - value of data-test attribute to search
 * @return {ShallowWrapper} val
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};