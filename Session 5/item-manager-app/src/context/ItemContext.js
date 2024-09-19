import React, { useReducer, createContext, useEffect } from 'react';

const ItemContext = createContext();

const initialState = JSON.parse(localStorage.getItem('items')) || [];

const itemReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, { id: Date.now(), name: action.payload.name, description: action.payload.description }];
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload);
    case 'EDIT_ITEM':
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, name: action.payload.name, description: action.payload.description }
          : item
      );
    default:
      return state;
  }
};

export const ItemProvider = ({ children }) => {
  const [state, dispatch] = useReducer(itemReducer, initialState);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(state));
  }, [state]);

  return (
    <ItemContext.Provider value={{ state, dispatch }}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContext;
