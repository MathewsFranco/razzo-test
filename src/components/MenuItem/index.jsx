import React from 'react';
import * as Styled from './style';
import Counter from '../Counter';
import formatPrice from '../../services/formatPrice';

const MenuItem = ({
  menuItemImg,
  menuItemName,
  menuItemDescription,
  menuItemPrice,
  menuItem,
}) => {
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
      <Counter item={menuItem} />
    </Styled.MenuItemCard>
  );
};

export default MenuItem;
