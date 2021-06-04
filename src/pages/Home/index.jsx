import React from 'react';
import Layout from '../../components/Layout';
import RestaurantsList from '../../components/RestaurantsList';

const Home = () => {
  return (
    <Layout home>
      <RestaurantsList />
    </Layout>
  );
};

export default Home;
