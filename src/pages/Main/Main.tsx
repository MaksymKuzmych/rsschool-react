import React, { Component } from 'react';

import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Cards } from '../../components/Cards/Cards';

import styles from './Main.module.css';

export class Main extends Component {
  render = () => (
    <div className={styles.wrapper}>
      <SearchBar />
      <Cards />
    </div>
  );
}
