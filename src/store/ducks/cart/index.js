import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const sumCartItem = createAction('SUM_CART_ITEM');
export const subCartItem = createAction('SUB_CART_ITEM');
export const addCartItem = createAction('ADD_CART_ITEM');
export const deleteCartItem = createAction('DELETE_CART_ITEM');

export default createReducer(INITIAL_STATE, {
  [sumCartItem.type]: (state, action) => {
    const index = state.findIndex((item) => item.uniqueId === action.payload); //finding index of the item
    state[index].quantity++;
    return state;
  },
  [subCartItem.type]: (state, action) => {
    const index = state.findIndex((item) => item.uniqueId === action.payload); //finding index of the item
    state[index].quantity--;
    return state;
  },
  [addCartItem.type]: (state, action) => [...state, { ...action.payload }],
  [deleteCartItem.type]: (state, action) => [
    ...state.filter((item) => item.uniqueId !== action.payload),
  ],
});
