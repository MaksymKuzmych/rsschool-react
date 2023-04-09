import React from 'react';
import { describe, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { App } from '../components/App/App';

describe('App', () => {
  it('Should renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/invalidPath']}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Not Found');
  });
});
