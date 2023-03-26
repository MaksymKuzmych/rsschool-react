import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Card } from '../components/Cards/Card/Card';
import { ICard } from '../interfaces/interfaces';

describe('Card', () => {
  const mockData: ICard = {
    id: 16,
    name: 'System of a Down - Toxicity',
    genre: 'Metal',
    year: 2001,
    description:
      'Toxicity is the second single by American rock band System of a Down, released in 2001. From the album of the same name. The lyrics were written by Serj Tankian, Daron Malakian and Shavo Odadjian. This song has never been as successful as "Chop Suey!" or "B.Y.O.B.", but Toxicity is still one of System of a Down\'s most popular songs among its fans. She is known for her dynamic choruses, aggressive vocals, and famous drum beat. The song peaked at number 14 on VH1\'s 40 Greatest Metal Songs.',
    image: './img/metal/System of a Down.jpg',
  };

  it('Should be defined', () => {
    expect(<Card card={mockData} />).toBeDefined();
  });

  it('Should has visible content', () => {
    render(<Card card={mockData} />);
    expect(screen.getByRole('img')).toBeVisible();
    expect(screen.getByText(/Genre:/)).toBeVisible();
    expect(screen.getByText(/Year:/)).toBeVisible();
  });
});
