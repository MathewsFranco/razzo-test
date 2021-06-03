import styled from 'styled-components';

export const MenuItemCard = styled.div`
  border: solid 1px ${(props) => props.theme.colors.contornoCampo};
  height: 274px;
  width: 266px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuItemImg = styled.img`
  height: 90px;
  width: 90px;
  border-radius: 7px;
  margin: 16px 0 8px 0;
  object-fit: cover;
`;

export const MenuItemName = styled.p`
  font-family: 'Gordita Regular';
  font-size: 14px;
  color: ${(props) => props.theme.colors.textosCampos};
  line-height: 16px;
  margin: 0 0 16px 0; ;
`;

export const MenuItemDescription = styled.p`
  font-family: 'Gordita Regular';
  font-size: 10px;
  color: ${(props) => props.theme.colors.textos};
  line-height: 15px;
  margin: 0 0 4px 0;
`;

export const MenuItemCookTime = styled.p`
  font-family: 'Gordita Regular';
  font-size: 10px;
  color: ${(props) => props.theme.colors.textos};
  line-height: 15px;
  margin: 0 0 9px 0;
`;

export const MenuItemPrice = styled.p`
  font-family: 'Gordita Regular';
  font-size: 16px;
  color: ${(props) => props.theme.colors.validar};
  line-height: 22.8px;
  margin: 0 0 15.5px 0;
`;
