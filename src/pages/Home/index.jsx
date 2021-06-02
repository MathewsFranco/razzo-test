import React from 'react';
import Cart from '../../components/Cart';
import MenuItem from '../../components/MenuItem';
import NavBar from '../../components/NavBar';
import RestaurantCard from '../../components/RestaurantCard';
import SearchBar from '../../components/SearchBar';

const Home = () => {
  return (
    <>
      <NavBar />
      <SearchBar />
      <MenuItem />
      <RestaurantCard />
      <Cart />
    </>
  );
};

export default Home;
