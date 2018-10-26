import React from 'react';
import styles from './Yaxis.module.scss';

const Yaxis = props => {
  return (
    <dt className={styles.yaxis}>
    {
        props.points.map((point, index) => (
            <span>{`${point}%`}</span>
        ))
    }
    </dt>
  );
};

export default Yaxis;
