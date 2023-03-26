import React, { Component } from 'react';

import styles from './AboutPage.module.css';

export class AboutPage extends Component {
  render = () => (
    <div className={styles.wrapper}>
      <h2 className={styles.text}>About Us</h2>
    </div>
  );
}
