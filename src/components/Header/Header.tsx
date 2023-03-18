import React, { Component } from 'react';

import { withRouter, WithRouterProps } from '../../utils/withRouter';
import Navigation from './Navigation/Navigation';

import styles from './Header.module.css';

class Header extends Component<WithRouterProps> {
  render = () => {
    const { pathname } = this.props.location;
    const title = pathname === '/' ? 'Main' : pathname === '/about' ? 'About' : 'Not Found';

    return (
      <header className={styles.wrapper}>
        <img className={styles.img} src="./svg/logo.svg" alt="Logo"></img>
        <h1 className={styles.title}>{title} Page</h1>
        <Navigation />
      </header>
    );
  };
}

export const HeaderWithRouter = withRouter(Header);
