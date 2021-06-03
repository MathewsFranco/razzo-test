import React from 'react';
import * as Styled from './style';
import Counter from '../Counter';

const MenuItem = ({
  menuItemImg,
  menuItemName,
  menuItemDescription,
  menuItemPrice,
}) => {
  function formatPrice(price) {
    const formattedPrice = (price / 100).toFixed(2).replace('.', ',');
    return formattedPrice;
  }
  return (
    <Styled.MenuItemCard>
      <Styled.MenuItemImg src={menuItemImg} />
      <Styled.MenuItemName>{menuItemName}</Styled.MenuItemName>
      <Styled.MenuItemDescription>
        {menuItemDescription}
      </Styled.MenuItemDescription>
      <Styled.MenuItemCookTime>Tempo de Preparo: 55min</Styled.MenuItemCookTime>
      <Styled.MenuItemPrice>
        R${formatPrice(menuItemPrice)}
      </Styled.MenuItemPrice>
      <Counter />
    </Styled.MenuItemCard>
  );
};

export default MenuItem;
