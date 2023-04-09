import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { SearchBar } from '../components/SearchBar/SearchBar';

describe('Search Bar', () => {
  it('Should be defined', () => {
    expect(<SearchBar changeSearchValue={() => {}} />).toBeDefined();
  });

  it('Should has right placeholder', () => {
    render(<SearchBar changeSearchValue={() => {}} />);
    expect(screen.getByPlaceholderText('What are you looking for?')).toBeInTheDocument();
  });
});
