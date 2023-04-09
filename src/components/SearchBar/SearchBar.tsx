import React, { useEffect, useRef, KeyboardEvent, memo } from 'react';

import styles from './SearchBar.module.css';

interface SearchBarProps {
  changeSearchValue: (value: string) => void;
}

export const SearchBar = memo(({ changeSearchValue }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const current = inputRef.current;
    if (current) current.value = localStorage.getItem('searchInput') || '';
    return () => localStorage.setItem('searchInput', current?.value || '');
  }, []);

  const handleSearchValue = () => {
    changeSearchValue(inputRef.current?.value || '');
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
});
