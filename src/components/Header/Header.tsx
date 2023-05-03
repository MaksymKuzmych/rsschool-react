import React from 'react';
import { useLocation } from 'react-router';

import { getHeaderTitle } from '../../utils/getHeaderTitle';
import { Navigation } from './Navigation/Navigation';

import styles from './Header.module.css';

export const Header = () => {
  const { pathname } = useLocation();
  const title = getHeaderTitle(pathname);

  return (
    <header className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src="./svg/logo.svg" alt="Logo" />
      </div>
      <h1 className={styles.title}>{title} Page</h1>
      <Navigation />
    </header>
  );
};
