// store.js
import { configureStore } from '@reduxjs/toolkit';
import stockReducer from './slices/stockSlice';

export const store = configureStore({
  reducer: {
    stock: stockReducer,
  },
});
