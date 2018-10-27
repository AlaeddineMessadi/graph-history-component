import React from 'react';
import Progressbar from '../Progressbar/Progressbar';

import styles from './Bargraph.module.scss';
import Yaxis from '../Yaxis/Yaxis';
import Loader from '../Loader/Loader';

import { maxObjArray, isEarlyThan, appendUnit } from '../../../utils/Utils';
import { WIDTH, HEIGHT, YAXIS } from '../../../utils/default';
import Aux from '../../../hoc/Aux';

/**
 * BarGraph component
 * 
 * @param {object} param0
 */
const Bargraph = ({ history = [], loading, margin, title, width = WIDTH, height = HEIGHT }) => {

  const maxScore = maxObjArray(history);
  let container = [<Loader key="loader" />];

  if (!loading) {
    // empty the container 
    container.length = 0;

    container.push(<Yaxis key="yaxis" points={ YAXIS } />);
    container.push(
      history
        .sort((a, b) => isEarlyThan(a.date, b.date))   // Sort history by date ( right to left )
        .map((session, index) => (
          <Progressbar
            key={ index }
            percent={ session.score / maxScore * 100 }
            value={ session.score }
          />
        ))
    )
  }

  console.log(margin);
  return (
    <main className={ styles.container } style={ { margin: appendUnit(margin) } } >
      <h3 className={ styles.graphTitle }>{ title }</h3>
      <dl className={ styles.bargraph } style={ { height: appendUnit(height), maxWidth: appendUnit(width) } }>
        { container }
      </dl>
    </main>
  );
}


export default Bargraph;