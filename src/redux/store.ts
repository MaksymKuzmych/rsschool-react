import { configureStore } from '@reduxjs/toolkit';
import { cardsApi } from './query/cardsQuery';

import searchReducer, { ISearchState } from './slice/searchSlice';
import usersReducer, { IUsersState } from './slice/usersSlice';

export interface rootState {
  [cardsApi.reducerPath]: ReturnType<typeof cardsApi.reducer>;
  searchValue: ISearchState;
  users: IUsersState;
}

export const store = configureStore({
  reducer: {
    [cardsApi.reducerPath]: cardsApi.reducer,
    searchValue: searchReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
});
