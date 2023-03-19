import React, { Component } from 'react';

import styles from './NotFound.module.css';

export class NotFound extends Component {
  render = () => (
    <div className={styles.wrapper}>
      <h2 className={styles.text}>Not Found</h2>
    </div>
  );
}
