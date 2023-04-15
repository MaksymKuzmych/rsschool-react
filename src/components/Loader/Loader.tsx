import React from 'react';

import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.loader} data-testid="loader">
      <div className={styles.loaderCircle}></div>
      <div className={styles.loaderCircle}></div>
      <div className={styles.loaderCircle}></div>
    </div>
  );
};
