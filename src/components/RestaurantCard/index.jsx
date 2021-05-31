import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllRestaurants } from '../../store/fetchActions';

const RestaurantCard = () => {
  const restaurants = useSelector((state) => state.restaurant);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRestaurants());
  }, [dispatch]);
  return <div>{restaurants}</div>;
};

export default RestaurantCard;
