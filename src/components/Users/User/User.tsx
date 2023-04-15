import React, { memo } from 'react';

import { IUser } from '../../../interfaces/interfaces';

import styles from './User.module.css';

interface UserProps {
  user: IUser;
}

export const User = memo(
  ({ user: { name, surname, birthday, country, languages, gender, avatar } }: UserProps) => {
    const languagesLayout = languages.map((lang, index) => <span key={index}>{lang}</span>);

    return (
      <article className={styles.wrapper}>
        <section className={styles.imgWrapper}>
          <img className={styles.img} src={avatar} alt={name} />
        </section>
        <section className={styles.mainInfo}>
          <h3 className={styles.title}>
            {name} {surname}
          </h3>
          <p className={styles.paragraph}>Gender: {gender}</p>
          <p className={styles.paragraph}>Birthday: {birthday?.toString()}</p>
          <p className={styles.paragraph}>Country: {country}</p>
          <h3 className={styles.title}>Languages:</h3>
          <p className={styles.paragraph}>{languagesLayout}</p>
        </section>
      </article>
    );
  }
);
