import { configureStore } from '@reduxjs/toolkit';
import restaurantsReducer from './ducks/restaurants';

export default configureStore({
  reducer: {
    restaurants: restaurantsReducer,
  },
});
