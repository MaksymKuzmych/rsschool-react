import React, { useState } from 'react';

import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Cards } from '../../components/Cards/Cards';
import { CardModal } from '../../components/CardModal/CardModal';
import { Loader } from '../../components/Loader/Loader';
import { ICard } from '../../interfaces/interfaces';
import { useFetchCards } from '../../hooks/useFetchCards';

import styles from './MainPage.module.css';

export const MainPage = () => {
  const { cards, isFetching, isError } = useFetchCards();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ICard | null>(null);

  const openModal = (value: ICard) => {
    setModalContent(value);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.wrapper}>
      <SearchBar />
      {isFetching ? <Loader /> : <Cards cards={cards} openModal={openModal} />}
      {isError && <p className={styles.error}>Something went wrong</p>}
      {isModalOpen && <CardModal closeModal={closeModal} modalContent={modalContent as ICard} />}
    </div>
  );
};
