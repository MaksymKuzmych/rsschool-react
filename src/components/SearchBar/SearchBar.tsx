import React, { useEffect, useRef, KeyboardEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateSearchValue } from '../../redux/slice/searchSlice';
import { rootState } from '../../redux/store';

import styles from './SearchBar.module.css';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state: rootState) => state.searchValue.searchValue);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const current = inputRef.current;
    if (current) current.value = searchValue;
  }, [searchValue]);

  const handleSearchValue = () => {
    dispatch(updateSearchValue(inputRef.current?.value || ''));
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') handleSearchValue();
  };

  return (
    <div className={styles.search} data-testid="search">
      <input
        type="text"
        className={styles.searchTerm}
        placeholder="What are you looking for?"
        ref={inputRef}
        onKeyDown={handleKeyPress}
      />
      <button type="submit" className={styles.searchButton} onClick={handleSearchValue}>
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};
