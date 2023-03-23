import React, { Component } from 'react';

import { withRouter, WithRouterProps } from '../../utils/withRouter';
import { getHeaderTitle } from '../../utils/getHeaderTitle';
import Navigation from './Navigation/Navigation';

import styles from './Header.module.css';

class Header extends Component<WithRouterProps> {
  render = () => {
    const { pathname } = this.props.location;
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
}

export const HeaderWithRouter = withRouter(Header);
