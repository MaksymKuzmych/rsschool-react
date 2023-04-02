import React, { useEffect, useRef } from 'react';

import styles from './SearchBar.module.css';

export const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const current = inputRef.current;
    if (current) current.value = localStorage.getItem('searchInput') || '';
    return () => localStorage.setItem('searchInput', current?.value || '');
  }, []);

  return (
    <div className={styles.search} data-testid="search">
      <input
        type="text"
        className={styles.searchTerm}
        placeholder="What are you looking for?"
        ref={inputRef}
      />
      <button type="submit" className={styles.searchButton}>
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};
