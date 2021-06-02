import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = [
  {
    data: [
      {
        deleted: false,
        activated: true,
        _id: '609eff73066ccd492832f071',
        name: 'Pizza G',
        category: 'Pizza',
        business: '609ee7c9daf43e472de400e4',
        description: ' Pizza grande',
        pricing: 3500,
        imgs: [
          {
            _id: '609f044be830d372d1edf6da',
            url: 'https://razzo-bucket.s3.amazonaws.com/public/product/609eff73066ccd492832f071/1621034053942',
          },
          {
            _id: '609f0461e830d372d1edf6db',
            url: 'https://razzo-bucket.s3.sa-east-1.amazonaws.com/public/product/609eff73066ccd492832f071/1621034080598',
          },
        ],
        createdAt: '2021-05-14T22:53:39.687Z',
        updatedAt: '2021-05-14T23:14:41.025Z',
        __v: 2,
      },
    ],
  },
];

export const addCartItem = createAction('ADD_CART_ITEM');

export default createReducer(INITIAL_STATE, {
  [addCartItem]: (state, action) => [...state, ...action.payload],
});
