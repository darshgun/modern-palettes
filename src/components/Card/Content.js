import React from "react";
import PropTypes from "prop-types";

import styles from "./Card.module.scss";

function Content({ children }) {
  return <div className={styles.content}>{children}</div>;
}

Content.propTypes = {};

export default Content;
