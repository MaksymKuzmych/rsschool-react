import React, { useEffect, useMemo, useState } from 'react';

import { songsData } from '../../assets/songs-data/songs';
import { ICard } from '../../interfaces/interfaces';
import { Card } from './Card/Card';

import styles from './Cards.module.css';

export const Cards = () => {
  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => setCards(songsData), []);

  const cardsLayout = useMemo(
    () => cards.map((card) => <Card key={card.id} card={card} />),
    [cards]
  );

  return (
    <div className={styles.wrapper} data-testid="cards">
      {cardsLayout}
    </div>
  );
};
