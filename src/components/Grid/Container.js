import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ClassNames } from 'utilities/ClassNames';

/**
 * Container of the Grid compound component
 */
const component = 'container';

export const Container = ({ fluid, className, style, children }) => {
  /**
   * Filtering props
   */
  const properties = {
    className: ClassNames(fluid ? `${component}-fluid` : component, className),
    style: { ...style },
  };

  return <div {...properties}>{children}</div>;
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  fluid: PropTypes.bool,
  style: PropTypes.object,
};

export default Container;
