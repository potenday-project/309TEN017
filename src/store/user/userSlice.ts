/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../../types/db';

type UserState = Omit<User, 'password'>;

const initialState: UserState = {
  id: 0,
  created_at: new Date(),
  name: '',
  save_money: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: state => state,
    setUser: (state, action: PayloadAction<{ user: User }>) => {
      delete (action.payload.user as any).password;
      state = action.payload.user;
    },
  },
});

export const { getUser, setUser } = userSlice.actions;
export default userSlice.reducer;
