import React, { Component } from "react";
import Progressbar from "../Progressbar/Progressbar";

import styles from "./Bargraph.module.scss";
import Yaxis from "../Yaxis/Yaxis";

export default class Bargraph extends Component {
  render() {
    // dummy data
    let res = [];
    for (let i = 0; i <= 12; i++) {
      res.push(
        <Progressbar
          key={i}
          height={Math.floor(Math.random() * 100)}
          value={Math.floor(Math.random() * 9999)}
        />
      );
    }
    return (
      <dl className={styles.bargraph}>
        <Yaxis points={[25, 50, 75, 100]} />
        {res}
      </dl>
    );
  }
}
