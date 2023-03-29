import React, { memo } from 'react';

import { ICard } from '../../../interfaces/interfaces';

import styles from './Card.module.css';

interface CardProps {
  card: ICard;
}

export const Card = memo(({ card }: CardProps) => {
  const { name, genre, year, description, image } = card;

  return (
    <article className={styles.wrapper} data-testid="card">
      <section className={styles.imgWrapper}>
        <img className={styles.img} src={image} alt={name} />
      </section>
      <h3 className={styles.name}>{name}</h3>
      <section className={styles.mainInfo}>
        <p className={styles.genre}>
          Genre: <strong>{genre}</strong>
        </p>
        <p className={styles.year}>
          Year: <strong>{year}</strong>
        </p>
      </section>
      <section className={styles.description}>{description}</section>
    </article>
  );
});
