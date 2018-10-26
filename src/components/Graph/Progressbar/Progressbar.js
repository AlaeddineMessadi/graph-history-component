import React from "react";
import styles from "./Progressbar.module.scss";

const Progressbar = props => {
  console.log(props.height)
  return (
    <dd className={ styles.progressbar } style={ { padding: `0 ${props.margin}` } }>
      <span style={ { height: `${props.percent}%` } } data-value={ props.value } />
    </dd>
  );
};

export default Progressbar;
