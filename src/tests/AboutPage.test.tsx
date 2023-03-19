import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { About } from '../pages/About/About';

describe('About Page', () => {
  it('Should be defined', () => {
    expect(<About />).toBeDefined();
  });

  it('Should has right content', () => {
    render(<About />);
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('About Us');
  });
});
