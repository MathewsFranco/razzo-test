import React from 'react';
import Counter from '../Counter';
import * as Styled from './style';

const CartItem = () => {
  return (
    <Styled.CartItemCard>
      <Styled.CartItemRestaurant>Teste Top</Styled.CartItemRestaurant>
      <Styled.CartItemInfo>
        <Styled.Wrapper>
          <Styled.CartItemImage src="https://via.placeholder.com/79x77" />
          <Styled.CartItemText>
            <Styled.CartItemName>CartItemName</Styled.CartItemName>
            <Styled.CartItemType>CartItemType</Styled.CartItemType>
            <Styled.CartItemPrice>R$ 79,90</Styled.CartItemPrice>
          </Styled.CartItemText>
        </Styled.Wrapper>
        <Styled.Wrapper>
          <Counter vertical />
          <Styled.DeleteIcon />
        </Styled.Wrapper>
      </Styled.CartItemInfo>
    </Styled.CartItemCard>
  );
};

export default CartItem;
