import React, { MouseEventHandler, memo } from 'react';
import { Blurhash } from 'react-blurhash';

import { ICard } from '../../interfaces/interfaces';

import styles from './CardModal.module.css';

interface CardModalProps {
  modalContent: ICard;
  closeModal: () => void;
}

export const CardModal = memo(
  ({
    modalContent: {
      created_at: createdAt,
      description,
      alt_description: altDescription,
      blur_hash: blurHash,
      likes,
      urls: { full: imageSrc },
      user: { username, location: userLocation },
    },
    closeModal,
  }: CardModalProps) => {
    const handleCloseModal: MouseEventHandler<HTMLDivElement> = (event) => {
      if (event.target === event.currentTarget) closeModal();
    };

    return (
      <div className={styles.wrapper} onClick={handleCloseModal}>
        <div className={styles.modalInfo}>
          <div className={styles.imgWrapper}>
            <a href={imageSrc} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <img className={styles.img} src={imageSrc} alt={altDescription} />
            </a>
            <Blurhash hash={blurHash} width="100%" height="100%" className={styles.blurhash} />
          </div>
          <div className={styles.info}>
            <h3 className={styles.title}>Main info</h3>
            <p>
              <strong>Author</strong>: {username}
            </p>
            <p>
              <strong>User location</strong>: {userLocation || 'unknown'}
            </p>
            <p>
              <strong>Created at</strong>: {createdAt}
            </p>
            <p>
              <strong>Description</strong>: {altDescription || description}
            </p>
            <p className={styles.likes}>&#x2764; {likes}</p>
            <p className={styles.additionalInfo}>
              <strong>PS</strong>: You can click on the image to open it in full resolution in a new
              browser window
            </p>
          </div>
          <div className={styles.closeBtn} onClick={closeModal}>
            &#10006;
          </div>
        </div>
      </div>
    );
  }
);
