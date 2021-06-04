import React, { useState } from 'react';
import Counter from '../Counter';
import * as Styled from './style';
import formatPrice from '../../services/formatPrice';
import { useDispatch } from 'react-redux';
import { deleteCartItem } from '../../store/ducks/cart';
import restaurantsApi from '../../services/restaurantsApi';

const CartItem = ({
  img,
  name,
  type,
  price,
  quantity,
  uniqueId,
  businessId,
}) => {
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(deleteCartItem(uniqueId));
  }

  const [businessName, setBusinessName] = useState('Restaurant Name');

  restaurantsApi
    .get(businessId)
    .then((res) => setBusinessName(res.data.name))
    .catch(console.log);

  return (
    <Styled.CartItemCard>
      <Styled.CartItemRestaurant>{businessName}</Styled.CartItemRestaurant>
      <Styled.CartItemInfo>
        <Styled.Wrapper>
          <Styled.CartItemImage src={img} />
          <Styled.CartItemText>
            <Styled.CartItemName>{name}</Styled.CartItemName>
            <Styled.CartItemType>{type}</Styled.CartItemType>
            <Styled.CartItemPrice>R${formatPrice(price)}</Styled.CartItemPrice>
          </Styled.CartItemText>
        </Styled.Wrapper>
        <Styled.Wrapper>
          <Counter vertical inCart amount={quantity} cartItemId={uniqueId} />
          <Styled.DeleteIcon onClick={handleDelete} />
        </Styled.Wrapper>
      </Styled.CartItemInfo>
    </Styled.CartItemCard>
  );
};

export default CartItem;
