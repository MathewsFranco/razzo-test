import React from 'react';
import * as Styled from './style';

const ReferenceBar = () => {
  return (
    <Styled.Wrapper>
      <Styled.ArrowLeftIcon></Styled.ArrowLeftIcon>
      <Styled.ReferenceWrapper>
        <Styled.PageReference>Home</Styled.PageReference>
        <Styled.ArrowRightIcon />
        <Styled.CartReference>Cart</Styled.CartReference>
      </Styled.ReferenceWrapper>
    </Styled.Wrapper>
  );
};

export default ReferenceBar;
