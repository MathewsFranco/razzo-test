import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem';
import * as Styled from './style';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log(`🚀 ~ cartItems`, cartItems);
  // const restaurantName = useSelector((state) => state.restaurants);

  return (
    <Styled.CartWrapper>
      <Styled.Cart>
        {cartItems.length > 0 &&
          cartItems.map((item, index) => {
            console.log(item);
            return (
              <CartItem
                key={index}
                img={item.imgs[0].url}
                name={item.name}
                type={item.category}
                price={item.pricing}
                quantity={item.quantity}
                uniqueId={item.uniqueId}
              />
            );
          })}
      </Styled.Cart>
      <Styled.CartBtn secondary>Continuar Comprando</Styled.CartBtn>
      <Styled.CartBtn primary> Confirmar a Compra</Styled.CartBtn>
    </Styled.CartWrapper>
  );
};

export default Cart;
