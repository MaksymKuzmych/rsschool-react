import { PreloadedState, configureStore } from '@reduxjs/toolkit';
import { cardsApi } from './query/cardsQuery';

import searchReducer, { ISearchState } from './slice/searchSlice';
import usersReducer, { IUsersState } from './slice/usersSlice';

export interface rootState {
  [cardsApi.reducerPath]: ReturnType<typeof cardsApi.reducer>;
  searchValue: ISearchState;
  users: IUsersState;
}

export const initStore = (preloadedState?: PreloadedState<rootState>) =>
  configureStore({
    preloadedState,
    reducer: {
      [cardsApi.reducerPath]: cardsApi.reducer,
      searchValue: searchReducer,
      users: usersReducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(cardsApi.middleware);
    },
  });
