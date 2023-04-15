import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Cards } from '../components/Cards/Cards';
import { ICard } from '../interfaces/interfaces';

describe('Cards', () => {
  const mockData: ICard[] = [
    {
      id: '1',
      created_at: '2022-04-08T10:10:10-05:00',
      description: 'A beautiful landscape',
      alt_description: 'A mountain range with a lake in the foreground',
      blur_hash: 'L6M1Jj^6Rjj]_Nj[ayoKxvRjJ7ay',
      likes: 500,
      urls: { full: 'https://example.com/image.jpg', small: 'https://example.com/image-small.jpg' },
      user: { username: 'john_doe', location: 'New York' },
    },
    {
      id: '2',
      created_at: '2022-04-07T12:30:00-05:00',
      description: 'A cute kitten',
      alt_description: 'A kitten with big eyes and a pink nose',
      blur_hash: 'L6M1Jj^6Rjj]_Nj[ayoKxvRjJ7ay',
      likes: 1000,
      urls: {
        full: 'https://example.com/image2.jpg',
        small: 'https://example.com/image2-small.jpg',
      },
      user: { username: 'jane_doe', location: 'Los Angeles' },
    },
  ];

  it('Should be defined', () => {
    expect(<Cards cards={mockData} openModal={() => {}} />).toBeDefined();
  });

  it('Should has 2 cards', () => {
    render(<Cards cards={mockData} openModal={() => {}} />);
    expect(screen.queryAllByTestId('card')).toHaveLength(2);
  });
});
