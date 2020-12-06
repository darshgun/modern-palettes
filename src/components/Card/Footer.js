import React from "react";
import PropTypes from "prop-types";

import styles from "./Card.module.scss";

function Footer({ children }) {
  return <div className={styles.footer}>{children}</div>;
}

Footer.propTypes = {};

export default Footer;
