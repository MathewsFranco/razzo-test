import restaurantsApi from '../../services/restaurantsApi';
import menuApi from '../../services/menusApi';
import { addRestaurants } from '../ducks/restaurants';
import { populateMenu } from '../ducks/menu';

export const getAllRestaurants = () => {
  return (dispatch) => {
    restaurantsApi
      .get()
      .then((res) => {
        return dispatch(addRestaurants(res.data.data));
      })
      .catch(console.log());
  };
};

export const getRestaurantMenu = (restaurantId) => {
  return (dispatch) => {
    menuApi
      .get(restaurantId)
      .then((res) => {
        return dispatch(populateMenu(res.data.data));
      })
      .catch(console.log);
  };
};
