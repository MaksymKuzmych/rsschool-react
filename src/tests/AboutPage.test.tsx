import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { AboutPage } from '../pages/AboutPage/AboutPage';

describe('About Page', () => {
  it('Should be defined', () => {
    expect(<AboutPage />).toBeDefined();
  });

  it('Should has right content', () => {
    render(<AboutPage />);
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('About Us');
  });
});
