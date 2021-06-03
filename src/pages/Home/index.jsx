import React from 'react';
import Layout from '../../components/Layout';
import MenuList from '../../components/MenuItemsList';
import RestaurantsList from '../../components/RestaurantsList';

const Home = () => {
  return (
    <Layout>
      <RestaurantsList />
      <MenuList />
    </Layout>
  );
};

export default Home;
