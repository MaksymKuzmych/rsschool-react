import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

export default class Navigation extends Component {
  render = () => (
    <nav>
      <ul className={styles.list} data-testid="navigation">
        <NavLink className={({ isActive }) => (isActive ? styles.activeItem : styles.item)} to="/">
          Main
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.activeItem : styles.item)}
          to="/about"
        >
          About
        </NavLink>
      </ul>
    </nav>
  );
}
