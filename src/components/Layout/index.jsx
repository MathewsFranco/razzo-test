import React from 'react';
import NavBar from '../NavBar';
import ReferenceBar from '../ReferenceBar';
import SearchBar from '../SearchBar';
import Cart from '../Cart';
import * as Styled from './style';

const Layout = () => {
  return (
    <div>
      <NavBar />
      <ReferenceBar />
      <Styled.ContentWrapper>
        <Styled.Wrapper>
          {/* here comes the search bar or the restaurant card extended */}
          <SearchBar />
          <Styled.Content></Styled.Content>
        </Styled.Wrapper>
        <Cart />
      </Styled.ContentWrapper>
    </div>
  );
};

export default Layout;
