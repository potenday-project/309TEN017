/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactNode } from 'react';

type ModalState = {
  component: ReactNode | null;
  isOpen: boolean;
};

const initialState: ModalState = {
  component: null,
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<{ content: ReactNode }>) => ({
      component: action.payload.content,
      isOpen: true,
    }),
    closeModal: () => ({
      component: null,
      isOpen: false,
    }),
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
