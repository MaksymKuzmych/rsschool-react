import { configureStore } from '@reduxjs/toolkit';
import { cardsApi } from './query/cardsQuery';

import searchReducer, { ISearchState } from './slice/searchSlice';

export interface rootState {
  [cardsApi.reducerPath]: ReturnType<typeof cardsApi.reducer>;
  searchValue: ISearchState;
}

export const store = configureStore({
  reducer: {
    [cardsApi.reducerPath]: cardsApi.reducer,
    searchValue: searchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
});
