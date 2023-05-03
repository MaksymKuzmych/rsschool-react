import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Card } from '../components/Cards/Card/Card';
import { ICard } from '../interfaces/interfaces';

describe('Card', () => {
  const mockData: ICard = {
    id: '1',
    created_at: '2022-04-08T10:10:10-05:00',
    description: 'A beautiful landscape',
    alt_description: 'A mountain range with a lake in the foreground',
    blur_hash: 'L6M1Jj^6Rjj]_Nj[ayoKxvRjJ7ay',
    likes: 500,
    urls: { full: 'https://example.com/image.jpg', small: 'https://example.com/image-small.jpg' },
    user: { username: 'john_doe', location: 'New York' },
  };

  it('Should be defined', () => {
    expect(<Card card={mockData} openModal={() => {}} />).toBeDefined();
  });

  it('Should has visible content', () => {
    render(<Card card={mockData} openModal={() => {}} />);
    expect(screen.getByRole('img')).toBeVisible();
    expect(screen.getByText(/Author:/)).toBeVisible();
  });
});
