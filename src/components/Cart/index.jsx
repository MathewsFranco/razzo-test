import React from 'react';
import { useSelector } from 'react-redux';
import formatPrice from '../../services/formatPrice';
import CartItem from '../CartItem';
import * as Styled from './style';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const subtotal = cartItems.reduce(
    (acc, cur) => acc + cur.pricing * cur.quantity,
    0,
  );
  const deliveryTax = 790;
  return (
    <Styled.CartWrapper>
      <Styled.CartItems>
        {cartItems.length > 0 &&
          cartItems.map((item, index) => {
            return (
              <CartItem
                key={index}
                img={item.imgs[1].url}
                name={item.name}
                type={item.category}
                price={item.pricing}
                quantity={item.quantity}
                uniqueId={item.uniqueId}
                businessId={item.business}
              />
            );
          })}
      </Styled.CartItems>
      <Styled.PriceInfo>
        <Styled.PriceSpacer>
          <Styled.Label>Subtotal: </Styled.Label>
          <Styled.Value>R${formatPrice(subtotal)}</Styled.Value>
        </Styled.PriceSpacer>
        <Styled.PriceSpacer>
          <Styled.Label>Entrega:</Styled.Label>
          <Styled.Value>R${formatPrice(deliveryTax)}</Styled.Value>
        </Styled.PriceSpacer>
        <Styled.Separator />
        <Styled.PriceSpacer>
          <Styled.TotalLabel>Total:</Styled.TotalLabel>
          <Styled.TotalValue>
            R${formatPrice(subtotal + deliveryTax)}
          </Styled.TotalValue>
        </Styled.PriceSpacer>
      </Styled.PriceInfo>
      <Styled.CartBtn secondary>Continuar Comprando</Styled.CartBtn>
      <Styled.CartBtn primary> Confirmar a Compra</Styled.CartBtn>
    </Styled.CartWrapper>
  );
};

export default Cart;
