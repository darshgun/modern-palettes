import React from 'react';
import PropTypes from 'prop-types';
import { getConfiguration } from './config';
import { ClassNames } from 'utilities/ClassNames';

/**
 * Column child component configuration
 */
const component = 'col';
const columnConfig = getConfiguration().columnSizes;

/**
 *
 * @prop {Object} size    The default size of the column
 * @prop {string} lg The default size of the column
 * @prop {string} md  The default size of the column
 * @prop {string} sm  The default size of the column
 *
 * @returns {Array} Column classes
 */
const makeColumnClasses = ({ size, offset }) => {
  // Returning the keys for the matching values
  const getKeyByValue = (object, value) =>
    Object.keys(object).find((key) => object[key].indexOf(value) !== -1);

  const classesArray = [];

  /**
   * Breakpoint modifiers
   */
  // Settting default and higher screen size
  // To be refactored
  /* eslint-disable */
  if (size) {
    if (typeof size === 'object') {
      size.xl && classesArray.push(`${component}-xl-${getKeyByValue(columnConfig, size.xl)}`);
      size.lg && classesArray.push(`${component}-lg-${getKeyByValue(columnConfig, size.lg)}`);
      size.md && classesArray.push(`${component}-md-${getKeyByValue(columnConfig, size.md)}`);
      size.sm && classesArray.push(`${component}-sm-${getKeyByValue(columnConfig, size.sm)}`);
      size.xs && classesArray.push(`${component}-${getKeyByValue(columnConfig, size.xs)}`);
    } else {
      classesArray.push(`${component}-${getKeyByValue(columnConfig, size)}`);
    }
  }

  /**
   * Offset
   */
  if (offset) {
    if (typeof offset === 'object') {
      offset.xl && classesArray.push(`offset-xl-${getKeyByValue(columnConfig, offset.xl)}`);
      offset.lg && classesArray.push(`offset-lg-${getKeyByValue(columnConfig, offset.lg)}`);
      offset.md && classesArray.push(`offset-md-${getKeyByValue(columnConfig, offset.md)}`);
      offset.sm && classesArray.push(`offset-sm-${getKeyByValue(columnConfig, offset.sm)}`);
      offset.xs && classesArray.push(`offset-${getKeyByValue(columnConfig, offset.xs)}`);
    } else {
      classesArray.push(`offset-${getKeyByValue(columnConfig, offset)}`);
    }
  }

  /**
   * Setting the default className
   */
  if (!size) {
    classesArray.push(component);
  }

  return classesArray;
};

export const Column = React.forwardRef((props, ref) => {
  // Column classes
  const columnSize = makeColumnClasses(props);

  /**
   * Filtering props
   */
  const properties = {
    className: ClassNames(columnSize, props.className),
    ref,
  };

  return <div {...properties}>{props.children}</div>;
});

Column.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Column.displayName = component;

export default Column;
