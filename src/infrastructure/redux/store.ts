import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { rootReducer } from './index';

export const store = () => {
  const middlewares = [createSagaMiddleware(), logger];

  return configureStore({
    reducer: rootReducer,
    middleware: middlewares,
    devTools: process.env.NODE_ENV === 'development',
  });
};
