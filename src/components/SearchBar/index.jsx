import React from 'react';
import * as Styled from './style';

const SearchBar = () => {
  return (
    <Styled.Wrapper>
      <Styled.SearchBar placeholder="Buscar Estabelecimento" />
      <Styled.SearchBtn>
        <Styled.SearchIcon />
      </Styled.SearchBtn>
    </Styled.Wrapper>
  );
};

export default SearchBar;
