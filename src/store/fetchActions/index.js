import restaurantsApi from '../../services/restaurantsApi';
import { addRestaurants } from '../ducks/restaurants';

export const getAllRestaurants = () => {
  return (dispatch) => {
    restaurantsApi
      .get()
      .then((res) => {
        console.log('api res', res.data.data);
        return dispatch(addRestaurants(res.data.data));
      })
      .catch(console.log());
  };
};
