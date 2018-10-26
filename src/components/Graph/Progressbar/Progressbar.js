import React from "react";
import styles from "./Progressbar.module.scss";

const Progressbar = ({ value, percent }) => (
  <dd className={ styles.progressbar }>
    <span style={ { height: `${percent}%` } } data-value={ value } />
  </dd>
);

export default Progressbar;
