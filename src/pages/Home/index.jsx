import React from 'react';
import Cart from '../../components/Cart';
import MenuItem from '../../components/MenuItem';
import NavBar from '../../components/NavBar';
import RestaurantCard from '../../components/RestaurantCard';

const Home = () => {
  return (
    <>
      <NavBar />
      <MenuItem />
      <RestaurantCard />
      <Cart />
    </>
  );
};

export default Home;
