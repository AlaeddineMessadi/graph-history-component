import React from 'react';
import styles from './Progressbar.module.scss';

const Progressbar = props => {
  return (
    <li className={styles.progressbar}>
      <span
        style={{ height: `${props.height}%` }}
        data-value={props.value}
      />
    </li>
  );
};

export default Progressbar;
