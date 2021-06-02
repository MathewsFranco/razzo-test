import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const addMenuItem = createAction('ADD_MENU_ITEM');

export default createReducer(INITIAL_STATE, {
  [addMenuItem]: (_state, action) => [...action.payload],
});
