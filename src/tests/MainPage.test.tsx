import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Main } from '../pages/Main/Main';

describe('Main Page', () => {
  it('Should be defined', () => {
    expect(<Main />).toBeDefined();
  });

  it('Should has search bar and cards wrapper inside', () => {
    render(<Main />);
    expect(screen.getByTestId('search')).toBeInTheDocument();
    expect(screen.getByTestId('cards')).toBeInTheDocument();
  });
});
