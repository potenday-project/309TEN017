/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../../types/db';

type UserState = User;

const initialState: UserState = {
  id: 0,
  password: '',
  created_at: new Date().toISOString(),
  name: '',
  save_money: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: state => state,
    setUser: (state, action: PayloadAction<{ user: UserState }>) => action.payload.user,
  },
});

export const { getUser, setUser } = userSlice.actions;
export default userSlice.reducer;
