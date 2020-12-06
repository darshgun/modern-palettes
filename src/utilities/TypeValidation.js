import React from 'react';
/* eslint-disable */
/**
 * Gets first child by specified type
 *
 * @param     {node}    children - JSX children
 * @param     {array}   types - Types of children to match
 * @returns   {array}
 */
export const getChildByType = (children, types) =>
  React.Children.toArray(children).filter(
    (child) => types.indexOf(child?.props?.__TYPE) !== -1
  )[0];

/**
 * Gets all children by specified type
 *
 * @param     {node}    children - JSX children
 * @param     {array}   types - Types of children to match
 * @returns   {array}
 */
export const getChildrenByType = (children, types) =>
  React.Children.toArray(children).filter(
    (child) => types.indexOf(child?.props?.__TYPE) !== -1
  );

/**
 * Removes all children by specified type
 *
 * @param     {node}    children - JSX children
 * @param     {array}   types - Types of children to match
 * @returns   {array}
 */
export const removeChildrenByType = (children, types) =>
  React.Children.toArray(children).filter(
    (child) => types.indexOf(child?.props?.__TYPE) === -1
  );

/**
 * Ensures component type is not overwritten
 *
 * @param     {string}  expectedType - The expected type tp validate against
 * @returns   {func}    Custom PropTypes validation function
 */
export const typeValidation = (expectedType) => (
  props,
  propName,
  componentName
) => {
  if (props[propName] !== expectedType) {
    return new Error(
      `'${propName}' in '${componentName}'\n\nYou may NOT pass in a prop value for '${propName}'. ` +
        'It had 2 underscores in the prop name for a reason. So, if you would kindly remove it, we can all go about our error free day.\n'
    );
  }
};
