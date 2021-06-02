import React from 'react';
import NavBar from '../../components/NavBar';
import ReferenceBar from '../../components/ReferenceBar';
import SearchBar from '../../components/SearchBar';
import MenuItem from '../../components/MenuItem';
import RestaurantCard from '../../components/RestaurantCard';
import Cart from '../../components/Cart';

const Home = () => {
  return (
    <>
      <NavBar />
      <ReferenceBar />
      <SearchBar />
      <MenuItem />
      <RestaurantCard />
      <Cart />
    </>
  );
};

export default Home;
