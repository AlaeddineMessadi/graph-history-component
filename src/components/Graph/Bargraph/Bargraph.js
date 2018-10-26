import React, { Component } from "react";

import styles from "./Bargraph.module.scss";

export default class Bargraph extends Component {
  render() {
    return (
      <ul className={styles.bargraph}>
        <li>
          <span style={{height:"5%"}} title="10000" />
        </li>
        <li>
          <span style={{height:"100%"}} title="21654" />
        </li>
        <li>
          <span style={{height:"20%"}} title="78987" />
        </li>
        <li>
          <span style={{height:"15%"}} title="456549" />
        </li>
      </ul>
    );
  }
}
