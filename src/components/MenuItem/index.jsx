import React from 'react';
import * as Styled from './style';
import Counter from '../Counter';

const MenuItem = () => {
  return (
    <Styled.MenuItemCard>
      <Styled.MenuItemImg src="https://via.placeholder.com/90" />
      <Styled.MenuItemName>MenuItemName</Styled.MenuItemName>
      <Styled.MenuItemDescription>
        MenuItemDescription + MenuItemDescription
      </Styled.MenuItemDescription>
      <Styled.MenuItemCooktime>Tempo de Preparo: 55min</Styled.MenuItemCooktime>
      <Styled.MenuItemPrice>R$ 69,69</Styled.MenuItemPrice>
      <Counter />
    </Styled.MenuItemCard>
  );
};

export default MenuItem;
