import React, { useMemo } from 'react';

import { ICard } from '../../interfaces/interfaces';
import { Card } from './Card/Card';

import styles from './Cards.module.css';

interface CardsProps {
  cards: ICard[] | null;
  openModal: (value: ICard) => void;
}

export const Cards = ({ cards, openModal }: CardsProps) => {
  const cardsLayout = useMemo(() => {
    return cards?.map((card) => {
      return <Card key={card.id} card={card} openModal={openModal} />;
    });
  }, [cards, openModal]);

  return (
    <>
      {cardsLayout?.length === 0 && (
        <p className={styles.noFoundPhotos}>No matching photos found for your request</p>
      )}
      <div className={styles.wrapper} data-testid="cards">
        {cardsLayout}
      </div>
    </>
  );
};
