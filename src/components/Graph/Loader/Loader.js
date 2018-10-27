import React from 'react'
import styles from './Loader.module.scss';

/**
 * Loader (spinner) component
 */
const Loader = () => {
  return (
    <div className={ styles.loader }>
      <div className={ styles.rect1 }></div>
      <div className={ styles.rect2 }></div>
      <div className={ styles.rect3 }></div>
      <div className={ styles.rect4 }></div>
      <div className={ styles.rect5 }></div>
    </div>
  )
}

export default Loader;
