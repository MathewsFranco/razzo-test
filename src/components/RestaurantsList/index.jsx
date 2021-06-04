import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { populateMenu } from '../../store/ducks/menu';
import { getAllRestaurants, getRestaurantMenu } from '../../store/fetchActions';
import RestaurantCard from '../RestaurantCard';

const RestaurantsList = () => {
  const restaurants = useSelector((state) => state.restaurants);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRestaurants());
    dispatch(populateMenu([]));
  }, [dispatch]);

  function handleClick(restaurantId) {
    dispatch(getRestaurantMenu(restaurantId));
  }

  return (
    <>
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant._id}
          imgSource={restaurant.assets.logo}
          restaurantName={restaurant.name}
          restaurantType={restaurant.description}
          restaurantStreet={restaurant.address.street_name}
          restaurantNum={restaurant.address.street_number}
          restaurantNeighborhood={restaurant.address.neighborhood}
          onClick={() => handleClick(restaurant._id)}
          restaurantId={restaurant._id}
        />
      ))}
    </>
  );
};

export default RestaurantsList;
