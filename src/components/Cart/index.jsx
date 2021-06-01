import React from 'react';
import * as Styled from './style';
import CartItem from '../CartItem';

const Cart = () => {
  return (
    <Styled.CartWrapper>
      <Styled.Cart>
        <CartItem />
        <CartItem />
      </Styled.Cart>
      <Styled.CartBtn secondary>Continuar Comprando</Styled.CartBtn>
      <Styled.CartBtn primary> Confirmar a Compra</Styled.CartBtn>
    </Styled.CartWrapper>
  );
};

export default Cart;
