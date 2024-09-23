// stockSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 10000,
  portfolio: [],
  stockList: [
    { id: 1, name: 'Apple', price: 145.83 },
    { id: 2, name: 'Microsoft Corporation', price: 277.65 },
    { id: 3, name: 'Amazon.com Inc.', price: 3372.20 },
  ],
  error: null,
};

const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    buyStock: (state, action) => {
      const { id, quantity } = action.payload;
      const stock = state.stockList.find((s) => s.id === id);
      const cost = stock.price * quantity;

      if (state.balance >= cost) {
        state.balance -= cost;
        state.error = null; // Clear error if the transaction is valid

        const portfolioItem = state.portfolio.find((s) => s.id === id);
        if (portfolioItem) {
          portfolioItem.quantity += quantity;
        } else {
          state.portfolio.push({ ...stock, quantity });
        }
      } else {
        state.error = "Insufficient balance to complete the purchase.";
      }
    },
    sellStock: (state, action) => {
      const { id, quantity } = action.payload;
      const portfolioItem = state.portfolio.find((s) => s.id === id);

      if (portfolioItem && portfolioItem.quantity >= quantity) {
        const revenue = portfolioItem.price * quantity;
        state.balance += revenue;
        portfolioItem.quantity -= quantity;
        state.error = null; // Clear error if the transaction is valid

        if (portfolioItem.quantity === 0) {
          state.portfolio = state.portfolio.filter((s) => s.id !== id);
        }
      } else {
        state.error = "You don't own enough shares to complete the sale.";
      }
    },
    clearError: (state) => {
      state.error = null; // Clear error manually if needed
    },
  },
});

export const { buyStock, sellStock, clearError } = stockSlice.actions;
export default stockSlice.reducer;
