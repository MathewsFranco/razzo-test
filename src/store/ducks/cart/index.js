import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const addCartItem = createAction('ADD_CART_ITEM');
export const deleteCartItem = createAction('DELETE_CART_ITEM');

export default createReducer(INITIAL_STATE, {
  [addCartItem.type]: (state, action) => [...state, { ...action.payload }],
  [deleteCartItem.type]: (state, action) => [
    ...state.filter((item) => item.uniqueId !== action.payload),
  ],
});
