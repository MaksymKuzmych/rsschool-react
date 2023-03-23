import React, { Component } from 'react';

import styles from './Footer.module.css';

export class Footer extends Component {
  render = () => (
    <footer className={styles.wrapper}>
      <a href="https://github.com/MaksymKuzmych">
        <img className={styles.img} src="./svg/github.svg" alt="Github" />
      </a>
      <p className={styles.year}>2023</p>
      <a href="https://rs.school/react">
        <img className={styles.img} src="./svg/rs-school.svg" alt="RSSchool" />
      </a>
    </footer>
  );
}
