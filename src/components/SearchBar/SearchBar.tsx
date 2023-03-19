import React, { Component, ChangeEvent } from 'react';

import styles from './SearchBar.module.css';

interface SearchBarState {
  value: string;
}

export class SearchBar extends Component {
  state: SearchBarState = {
    value: '',
  };

  componentDidMount = () => {
    const valueFromLocalStorage = localStorage.getItem('searchInput');

    this.setState({ value: valueFromLocalStorage || '' });
  };

  componentWillUnmount = () => {
    localStorage.setItem('searchInput', this.state.value);
  };

  handleInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  };

  render = () => (
    <div className={styles.search} data-testid="search">
      <input
        type="text"
        className={styles.searchTerm}
        placeholder="What are you looking for?"
        value={this.state.value}
        onChange={this.handleInputValue}
      ></input>
      <button type="submit" className={styles.searchButton}>
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
}
