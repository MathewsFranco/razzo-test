import React from 'react';
import Cart from '../../components/Cart';
import CartItem from '../../components/CartItem';
import NavBar from '../../components/NavBar';
import RestaurantCard from '../../components/RestaurantCard';

const Home = () => {
  return (
    <>
      <NavBar />
      <RestaurantCard />
      <CartItem />
      <Cart />
    </>
  );
};

export default Home;
