import React from 'react';
import Progressbar from '../Progressbar/Progressbar';
import Aux from '../../../hoc/Aux';

import styles from './Bargraph.module.scss';
import Yaxis from '../Yaxis/Yaxis';
import Loader from '../Loader/Loader';

import { maxObjArray } from '../../../utils/Utils';
import { WIDTH, HEIGHT, YAXIS } from '../../../utils/default';

const Bargraph = ({ history = [], width = WIDTH, height = HEIGHT }) => {

  const maxScore = maxObjArray(history);

  let graph = [];

  if (history.length <= 0) {
    graph.push(<Loader />)
  } else {
    graph.push(<Yaxis points={ YAXIS } />);
    graph.push(
      history
        .sort((a, b) => (a.score < b.score))
        .map((session, index) => (
          <Progressbar
            key={ index }
            percent={ session.score / maxScore * 100 }
            value={ session.score }
          />
        )
        ))
  }
  return (
    <dl className={ styles.bargraph } style={ { height, width } }>
      { graph }
    </dl>
  );
}


export default Bargraph;