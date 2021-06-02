import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem';
import * as Styled from './style';

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const restaurantName = useSelector((state) => state.restaurants);

  return (
    <Styled.CartWrapper>
      <Styled.Cart>
        {cartItems?.map((item) => (
          <CartItem
            key={item._id}
            imgSource={item.imgs[0].url}
            CartItemName={item.name}
            CartItemType={item.description}
            CartItemStreet={item.address.street_name}
            CartItemNum={item.address.street_number}
            CartItemNeighborhood={item.address.neighborhood}
          />
        ))}
      </Styled.Cart>
      <Styled.CartBtn secondary>Continuar Comprando</Styled.CartBtn>
      <Styled.CartBtn primary> Confirmar a Compra</Styled.CartBtn>
    </Styled.CartWrapper>
  );
};

export default Cart;
