import { useState, useEffect } from 'react';

import { API_KEY, API_URL, ITEMS_PER_PAGE } from '../config';
import { ICard, ICardsJson } from 'interfaces/interfaces';

interface FetchDataResponse {
  cards: ICard[] | null;
  isLoading: boolean;
  error: string | null;
  changeSearchValue: (value: string) => void;
}

export const useFetchCards = (): FetchDataResponse => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchInput') || 'photo');
  const [cards, setCards] = useState<ICard[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const changeSearchValue = (value: string) => setSearchValue(value);

  useEffect(() => {
    const fetchCards = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${API_URL}?client_id=${API_KEY}&per_page=${ITEMS_PER_PAGE}&orientation=landscape&query=${searchValue}`
        );
        if (!response.ok) throw new Error(response.statusText);

        const json: ICardsJson = await response.json();
        const cardsData = json.results.map((item: ICard) => ({
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
        setError(null);
      } catch (error) {
        setError(error as string);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCards();
  }, [searchValue]);

  return { cards, isLoading, error, changeSearchValue };
};
