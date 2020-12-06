import React from 'react';
import PropTypes from 'prop-types';
import childColumn from './Column';
import { ClassNames } from 'utilities/ClassNames';

/**
 * Container of the Grid compound component
 */
const component = 'row';

const gridModifiers = {
  gapless: 'no-gutters',
};

const alignTypes = {
  start: 'align-items-start',
  end: 'align-items-end',
  center: 'align-items-center',
  stretch: 'align-items-stretch',
  baseline: 'align-items-baseline',
};

const justifyTypes = {
  start: 'justify-content-start',
  end: 'justify-content-end',
  center: 'justify-content-center',
  between: 'justify-content-space-between',
  around: 'justify-content-space-around',
  fill: 'justify-content-fill',
  fillEvenly: 'justify-content-fill-evenly',
};

/**
 *
 * @prop {string} size    The default size of the column
 * @prop {string} desktop The default size of the column
 * @prop {string} tablet  The default size of the column
 * @prop {string} mobile  The default size of the column
 *
 * @returns {Array} Column classes
 */
const makeColumnClasses = ({ gapless, align, justify }) => {
  const classesArray = [];

  /**
   * Other modifiers
   */
  if (gapless) {
    classesArray.push(gridModifiers.gapless);
  }
  if (align) {
    classesArray.push(alignTypes[align]);
  }
  if (justify) {
    classesArray.push(justifyTypes[justify]);
  }

  return classesArray;
};

export default function Grid(props) {
  // Column classes
  const gridModifierClasses = makeColumnClasses(props);

  /**
   * Filtering props
   */
  const properties = {
    className: ClassNames(component, gridModifierClasses, props.className),
  };

  return <div {...properties}>{props.children}</div>;
}

Grid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

/**
 * Child components
 */
Grid.Column = childColumn;
