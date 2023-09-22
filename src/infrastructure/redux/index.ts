import { combineReducers } from '@reduxjs/toolkit';
import { reducer as modalReducer } from '../../application/usecases/modal.usecase';

export const rootReducer = combineReducers({
  modalAdaptor: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
