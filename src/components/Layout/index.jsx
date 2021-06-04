import React from 'react';
import NavBar from '../NavBar';
import ReferenceBar from '../ReferenceBar';
import SearchBar from '../SearchBar';
import Cart from '../Cart';
import * as Styled from './style';
import RestaurantCard from '../RestaurantCard';

const Layout = ({ children, home = false, menu = false }) => {
  return (
    <div
      style={{ minHeight: '100vh', maxHeight: '100vh', overflowX: 'hidden' }}
    >
      <NavBar />
      <ReferenceBar />
      <Styled.ContentWrapper>
        <Styled.Wrapper>
          {/* here comes the search bar or the restaurant card extended */}
          {home ? <SearchBar /> : menu ? <RestaurantCard inMenu /> : ''}

          <Styled.Content>{children}</Styled.Content>
        </Styled.Wrapper>
        <Cart />
      </Styled.ContentWrapper>
    </div>
  );
};

export default Layout;
