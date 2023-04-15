import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

export const Navigation = () => {
  const checkActive = (isActive: boolean) => {
    return isActive ? styles.activeItem : styles.item;
  };

  const navLinksLayout = useMemo(() => {
    const navLinks = {
      Main: '/',
      About: '/about',
      Form: '/form',
    };

    return Object.entries(navLinks).map((navLink, index) => {
      return (
        <NavLink className={({ isActive }) => checkActive(isActive)} to={navLink[1]} key={index}>
          {navLink[0]}
        </NavLink>
      );
    });
  }, []);

  return (
    <nav>
      <ul className={styles.list} data-testid="navigation">
        {navLinksLayout}
      </ul>
    </nav>
  );
};
