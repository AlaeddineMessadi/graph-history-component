import React, { Component } from "react";
import Progressbar from "../Progressbar/Progressbar";

import styles from "./Bargraph.module.scss";
import Yaxis from "../Yaxis/Yaxis";

import { maxObjArray } from '../../../utils/Utils';
import { WIDTH, HEIGHT, YAXIS } from '../../../utils/default';

const Bargraph = ({ history = [], width = WIDTH, height = HEIGHT }) => {

  const maxScore = maxObjArray(history);

  return (
    <dl className={ styles.bargraph } style={ { height, width } }>
      <Yaxis points={ yAxis } />
      {
        history
          .sort((a, b) => (a.score < b.score))
          .map((session, index) => (
            <Progressbar
              key={ index }
              percent={ session.score / maxScore * 100 }
              value={ session.score }
            />
          )
          )
      }
    </dl>
  );
}


export default Bargraph;