import { configureStore } from '@reduxjs/toolkit';
import restaurantsReducer from './ducks/restaurants';
import menuReducer from './ducks/menu';
import cartReducer from './ducks/cart';

export default configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    menuItems: menuReducer,
    cart: cartReducer,
  },
});
