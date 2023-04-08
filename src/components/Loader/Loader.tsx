import React from 'react';

import styles from './Loader.module.css';

export const Loader = () => (
  <div className={styles.loader}>
    <div className={styles.loaderCircle}></div>
    <div className={styles.loaderCircle}></div>
    <div className={styles.loaderCircle}></div>
  </div>
);
