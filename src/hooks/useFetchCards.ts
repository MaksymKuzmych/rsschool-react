import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ICard } from '../interfaces/interfaces';
import { useFetchCardsQuery } from '../redux/query/cardsQuery';
import { rootState } from '../redux/store';

interface FetchDataResponse {
  cards: ICard[] | null;
  isFetching: boolean;
  isError: boolean;
}

export const useFetchCards = (): FetchDataResponse => {
  const searchValue = useSelector((state: rootState) => state.searchValue.searchValue);
  const [cards, setCards] = useState<ICard[] | null>(null);
  const { data, isFetching, isSuccess, isError } = useFetchCardsQuery(searchValue || 'photo');

  useEffect(() => {
    if (isSuccess) {
      const cardsData: ICard[] = data.results.map((item: ICard) => ({
        id: item.id,
        created_at: item.created_at,
        description: item.description,
        alt_description: item.alt_description,
        blur_hash: item.blur_hash,
        likes: item.likes,
        urls: { full: item.urls.full, small: item.urls.small },
        user: { username: item.user.username, location: item.user.location },
      }));

      setCards(cardsData);
    }
  }, [data, isSuccess, searchValue]);

  return {
    cards,
    isFetching,
    isError,
  };
};
