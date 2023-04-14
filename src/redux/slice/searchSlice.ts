import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ISearchState {
  searchValue: string;
}

const initialState: ISearchState = {
  searchValue: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { updateSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
