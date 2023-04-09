import React, { memo } from 'react';

import { ICard } from '../../../interfaces/interfaces';

import styles from './Card.module.css';

interface CardProps {
  card: ICard;
  openModal: (value: ICard) => void;
}

export const Card = memo(({ card, openModal }: CardProps) => {
  const {
    alt_description: altDescription,
    urls: { small: imageSrc },
    user: { username },
  } = card;

  return (
    <article className={styles.wrapper} data-testid="card" onClick={() => openModal(card)}>
      <section className={styles.imgWrapper}>
        <img className={styles.img} src={imageSrc} alt={altDescription} />
      </section>
      <p className={styles.author}>
        <strong>Author:</strong> {username || 'unknown'}
      </p>
    </article>
  );
});
