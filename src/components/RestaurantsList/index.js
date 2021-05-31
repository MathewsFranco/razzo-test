import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllRestaurants } from '../../store/fetchActions';

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
        <div
          style={{ border: 'solid black 1px', margin: '10px 0 10px 0' }}
          key={restaurant._id}
        >
          {restaurant.name}
          <br />
          {restaurant._id}
        </div>
      ))}
    </>
  );
};

export default RestaurantsList;
