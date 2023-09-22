import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalEntity } from '../entities/modal.entity';

const initialState: ModalEntity = {
  ...new ModalEntity(),
};

const modalSlice = createSlice({
  initialState,
  name: 'modal',
  reducers: {
    // set: (state, action: PayloadAction<string>) => {
    //   state.modal = action.payload;
    // },
  },
});

export const { actions, reducer } = modalSlice;
