import React, { Component } from "react";

import styles from "./Bargraph.module.scss";

export default class Bargraph extends Component {
  render() {
    let res = [];
    for (let i = 0; i <= 12; i++) {
      res.push(
        <li>
          <span
            style={{ height: `${Math.floor(Math.random() * 100)}%` }}
            title={Math.floor(Math.random() * 99999)}
          />
        </li>
      );
    }
    return <ul className={styles.bargraph}>{res}</ul>;
  }
}
