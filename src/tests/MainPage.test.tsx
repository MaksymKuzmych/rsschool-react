import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { MainPage } from '../pages/MainPage/MainPage';

describe('Main Page', () => {
  it('Should be defined', () => {
    expect(<MainPage />).toBeDefined();
  });

  it('Should has search bar and cards wrapper inside', () => {
    render(<MainPage />);
    expect(screen.getByTestId('search')).toBeInTheDocument();
    expect(screen.getByTestId('cards')).toBeInTheDocument();
  });
});
