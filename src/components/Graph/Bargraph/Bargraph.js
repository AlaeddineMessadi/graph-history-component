import React, { Component } from "react";
import Progressbar from "../Progressbar/Progressbar";

import styles from "./Bargraph.module.scss";
import Yaxis from "../Yaxis/Yaxis";

const WIDTH = 900, HEIGHT = 200;

const Bargraph = ({ history = [], width = WIDTH, height = HEIGHT }) => {

  let maxWidth = 8000;
  let maxScore = 8381;
  console.log(history)

  return (
    <dl className={ styles.bargraph } style={ { height, width, maxWidth } }>
      <Yaxis points={ [25, 50, 75, 100] } />
      {
        history
          .sort((a, b) => (a.date < b.date))
          .map((session, index) => (
            <Progressbar
              key={ index }
              percent={ session.score / maxScore * 100 }
              value={ session.score }
              margin={ maxWidth / 100 }
            />
          )
          )
      }
    </dl>
  );
}


export default Bargraph;