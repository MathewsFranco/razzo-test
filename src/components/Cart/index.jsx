import React from 'react';
import * as Styled from './style';

const Cart = () => {
  return (
    <Styled.Cart>
      <Styled.CartBtn secondary>Continuar Comprando</Styled.CartBtn>
      <Styled.CartBtn primary> Confirmar a Compra</Styled.CartBtn>
    </Styled.Cart>
  );
};

export default Cart;
