import React from "react";
import PropTypes from "prop-types";

import styles from "./Card.module.scss";

function Header({ children }) {
  return <div className={styles.header}>{children}</div>;
}

Header.propTypes = {};

export default Header;
