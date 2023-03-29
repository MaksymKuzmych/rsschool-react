import React from 'react';

import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Cards } from '../../components/Cards/Cards';

import styles from './MainPage.module.css';

export const MainPage = () => (
  <div className={styles.wrapper}>
    <SearchBar />
    <Cards />
  </div>
);
