import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

const navLinks = {
  Main: '/',
  About: '/about',
  Form: '/form',
};

const checkActive = (isActive: boolean) => (isActive ? styles.activeItem : styles.item);

export const Navigation = () => {
  const navLinksLayout = Object.entries(navLinks).map((navLink, index) => (
    <NavLink className={({ isActive }) => checkActive(isActive)} to={navLink[1]} key={index}>
      {navLink[0]}
    </NavLink>
  ));

  return (
    <nav>
      <ul className={styles.list} data-testid="navigation">
        {navLinksLayout}
      </ul>
    </nav>
  );
};
