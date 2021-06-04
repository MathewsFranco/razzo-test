import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const populateMenu = createAction('ADD_MENU_ITEM');

export default createReducer(INITIAL_STATE, {
  [populateMenu.type]: (_state, action) => [...action.payload],
});
