import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { withRouter, WithRouterProps } from '../../utils/withRouter';

import styles from './Header.module.css';

class Header extends Component<WithRouterProps> {
  render = () => {
    const { pathname } = this.props.location;
    const title = pathname === '/' ? 'Main' : pathname === '/about' ? 'About' : 'Not Found';

    return (
      <header className={styles.wrapper}>
        <img className={styles.img} src="./svg/logo.svg" alt="Logo"></img>
        <h1 className={styles.title}>{title} Page</h1>
        <nav>
          <ul className={styles.list}>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeItem : styles.item)}
              to="/"
            >
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
      </header>
    );
  };
}

export const HeaderWithRouter = withRouter(Header);
