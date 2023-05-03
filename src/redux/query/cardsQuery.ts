import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_KEY, API_URL, ITEMS_PER_PAGE } from '../../config';
import { ICardsResponse } from '../../interfaces/interfaces';

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    fetchCards: build.query<ICardsResponse, string>({
      query: (searchValue: string) => {
        return `?client_id=${API_KEY}&per_page=${ITEMS_PER_PAGE}&orientation=landscape&query=${searchValue}`;
      },
    }),
  }),
});

export const { useFetchCardsQuery } = cardsApi;
