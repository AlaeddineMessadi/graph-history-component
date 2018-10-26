import React, { Component } from "react";
import Progressbar from "../Progressbar/Progressbar";

import styles from "./Bargraph.module.scss";

export default class Bargraph extends Component {
  render() {
    let res = [];
    for (let i = 0; i <= 12; i++) {
      res.push(
        <Progressbar
          height={Math.floor(Math.random() * 100)}
          value={Math.floor(Math.random() * 9999)}
        />
      );
    }
    return <ul className={styles.bargraph}>{res}</ul>;
  }
}
