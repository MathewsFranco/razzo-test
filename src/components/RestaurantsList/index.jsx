import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllRestaurants } from '../../store/fetchActions';
import RestaurantCard from '../RestaurantCard';

const RestaurantsList = () => {
  const restaurants = useSelector((state) => state.restaurants);
  console.log(`🚀 ~ restaurants`, restaurants);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRestaurants());
  }, [dispatch]);
  return (
    <>
      {restaurants.map((restaurant, index) => (
        <RestaurantCard
          key={restaurant._id}
          imgSource={restaurant.assets.logo}
          restaurantName={restaurant.name}
          restaurantType={restaurant.description}
          restaurantStreet={restaurant.address.street_name}
          restaurantNum={restaurant.address.street_number}
          restaurantNeighborhood={restaurant.address.neighborhood}
        />
      ))}
    </>
  );
};

export default RestaurantsList;
