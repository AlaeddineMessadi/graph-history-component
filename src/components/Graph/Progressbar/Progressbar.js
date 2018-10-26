import React from "react";
import styles from "./Progressbar.module.scss";

const Progressbar = props => {
  return (
    <dd className={styles.progressbar}>
      <span style={{ height: `${props.height}%` }} data-value={props.value} />
    </dd>
  );
};

export default Progressbar;
