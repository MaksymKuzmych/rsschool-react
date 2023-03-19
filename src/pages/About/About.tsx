import React, { Component } from 'react';

import styles from './About.module.css';

export class About extends Component {
  render = () => (
    <div className={styles.wrapper}>
      <h2 className={styles.text}>About Us</h2>
    </div>
  );
}
