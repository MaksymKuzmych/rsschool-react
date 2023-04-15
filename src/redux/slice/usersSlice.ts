import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IUser } from '../../interfaces/interfaces';

export interface IUsersState {
  users: IUser[];
}

const initialState: IUsersState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<IUser>) => {
      const newUser = action.payload;

      state.users.push(newUser);
    },
  },
});

export const { addNewUser } = usersSlice.actions;

export default usersSlice.reducer;
