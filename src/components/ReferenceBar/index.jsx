import React from 'react';
import Link from '../Link';
import * as Styled from './style';

const ReferenceBar = () => {
  return (
    <Styled.Wrapper>
      <Link to={'/'}>
        <Styled.ArrowLeftIcon />
      </Link>
      <Styled.ReferenceWrapper>
        <Link to={'/'}>
          <Styled.PageReference>Home</Styled.PageReference>
        </Link>
        <Styled.ArrowRightIcon />
        <Styled.CartReference>Cart</Styled.CartReference>
      </Styled.ReferenceWrapper>
    </Styled.Wrapper>
  );
};

export default ReferenceBar;
