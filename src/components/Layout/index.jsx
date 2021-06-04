import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar';
import ReferenceBar from '../ReferenceBar';
import SearchBar from '../SearchBar';
import Cart from '../Cart';
import * as Styled from './style';
import RestaurantCard from '../RestaurantCard';
import { useParams } from 'react-router-dom';
import restaurantsApi from '../../services/restaurantsApi';

const Layout = ({ children, home = false, menu = false }) => {
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState();

  useEffect(() => {
    restaurantsApi
      .get(restaurantId)
      .then((res) => setRestaurant(res.data))
      .catch(console.log);
  }, [restaurantId]);
  return (
    <div
      style={{ minHeight: '100vh', maxHeight: '100vh', overflowX: 'hidden' }}
    >
      <NavBar />
      <ReferenceBar />
      <Styled.ContentWrapper>
        <Styled.Wrapper>
          {/* here comes the search bar or the restaurant card extended */}
          {home && <SearchBar />}
          {menu && (
            <RestaurantCard
              imgSource={restaurant?.assets.logo}
              restaurantName={restaurant?.name}
              restaurantType={restaurant?.description}
              restaurantStreet={restaurant?.address.street_name}
              restaurantNum={restaurant?.address.street_number}
              restaurantNeighborhood={restaurant?.address.neighborhood}
              restaurantId={restaurant?._id}
              inMenu
            />
          )}

          <Styled.Content>{children}</Styled.Content>
        </Styled.Wrapper>
        <Cart />
      </Styled.ContentWrapper>
    </div>
  );
};

export default Layout;
