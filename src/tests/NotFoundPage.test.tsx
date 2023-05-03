import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { NotFound } from '../pages/NotFound/NotFound';

describe('Not Found Page', () => {
  it('Should be defined', () => {
    expect(<NotFound />).toBeDefined();
  });

  it('Should has right content', () => {
    render(<NotFound />);
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Not Found');
  });
});
