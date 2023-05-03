import React from 'react';
import { Provider } from 'react-redux';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { SearchBar } from '../components/SearchBar/SearchBar';
import { initStore } from '../redux/store';

describe('Search Bar', () => {
  const store = initStore();

  it('Should be defined', () => {
    expect(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    ).toBeDefined();
  });

  it('Should has right placeholder', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    expect(screen.getByPlaceholderText('What are you looking for?')).toBeInTheDocument();
  });
});
