import { configureStore } from '@reduxjs/toolkit';
import restaurantsReducer from './ducks/restaurants';
import menuReducer from './ducks/menu';

export default configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    menuItems: menuReducer,
  },
});
