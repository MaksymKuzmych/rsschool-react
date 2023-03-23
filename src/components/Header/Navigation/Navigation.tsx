import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

const navLinks = {
  Main: '/',
  About: '/about',
  Form: '/form',
};

export default class Navigation extends Component {
  render = () => {
    const navLinksLayout = Object.entries(navLinks).map((navLink, index) => (
      <NavLink
        className={({ isActive }) => (isActive ? styles.activeItem : styles.item)}
        to={navLink[1]}
        key={index}
      >
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
}
