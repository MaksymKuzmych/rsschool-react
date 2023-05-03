import React from 'react';
import { Provider } from 'react-redux';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Main } from '../pages/Main/Main';
import { ICard } from '../interfaces/interfaces';
import { API_URL } from '../config';
import { initStore } from '../redux/store';

const mockCards: ICard[] = [
  {
    id: '1',
    created_at: '2023-04-09T01:00:00Z',
    description: 'test',
    alt_description: 'test',
    blur_hash: 'test',
    likes: 1,
    urls: { full: 'http://test.com/full.jpg', small: 'http://test.com/small.jpg' },
    user: { username: 'testuser', location: 'testlocation' },
  },
  {
    id: '2',
    created_at: '2020-01-09T01:00:00Z',
    description: 'test2',
    alt_description: 'test2',
    blur_hash: 'test2',
    likes: 2,
    urls: { full: 'http://test.com/full.jpg', small: 'http://test.com/small.jpg' },
    user: { username: 'testuser2', location: 'testlocation2' },
  },
];

const server = setupServer(
  rest.get(API_URL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ results: mockCards }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Main Page Fetch', () => {
  const store = initStore();
  it('should handles API errors and displays an error message', async () => {
    server.use(
      rest.get(API_URL, (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: 'Server error' }));
      })
    );

    const mockStore = {
      ...store,
      cardsApi: { data: mockCards, error: '', isLoading: false },
    };

    render(
      <Provider store={mockStore}>
        <Main />
      </Provider>
    );

    expect(screen.getByTestId('loader')).toBeInTheDocument();

    const errorMessage = await screen.findByText('Something went wrong');

    expect(errorMessage).toBeInTheDocument();
    expect(screen.queryAllByTestId('card')).toHaveLength(0);
  });
});
