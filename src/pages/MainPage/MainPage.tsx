import React, { Component } from 'react';

import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Cards } from '../../components/Cards/Cards';

import styles from './MainPage.module.css';

export class MainPage extends Component {
  render = () => (
    <div className={styles.wrapper}>
      <SearchBar />
      <Cards />
    </div>
  );
}
