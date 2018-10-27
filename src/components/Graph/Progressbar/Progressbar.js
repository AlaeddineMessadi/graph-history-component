import React from 'react';
import styles from './Progressbar.module.scss';
import { appendUnit } from '../../../utils/Utils';

const Progressbar = ({ value, percent }) => (
  <dd className={ styles.progressbar }>
    <span style={ { height: appendUnit(percent, true) } } data-value={ value } />
  </dd>
);

export default Progressbar;
