import React from 'react';
import { Provider } from 'react-redux';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Main } from '../pages/Main/Main';
import { store } from '../redux/store';

describe('Main Page', () => {
  it('Should be defined', () => {
    expect(
      <Provider store={store}>
        <Main />
      </Provider>
    ).toBeDefined();
  });

  it('Should has search bar and cards wrapper inside', () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    expect(screen.getByTestId('search')).toBeInTheDocument();
  });
});
