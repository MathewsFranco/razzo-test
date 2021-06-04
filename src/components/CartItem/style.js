import styled from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa';
// import Counter from '../Counter'

// export const DisabledCounter = styled(Counter)`
//   onClick
// `;

export const CartItemCard = styled.div`
  width: 390px;
  height: 115px;
  margin: 0 0 42px 19px;
`;

export const CartItemRestaurant = styled.p`
  font-family: 'Gordita Medium';
  font-size: 16px;
  color: ${(props) => props.theme.colors.link};
  line-height: 18px;
  margin: 0;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CartItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CartItemImage = styled.img`
  margin: 7.7px 6px 0 0;
  width: 79px;
  height: 77px;
  border-radius: 7px;
`;

export const CartItemText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartItemName = styled.p`
  margin: 16px 5px 4px 0;
  font-family: 'Gordita Medium';
  font-size: 16px;
  color: ${(props) => props.theme.colors.textoCampos};
  line-height: 18px;
`;

export const CartItemType = styled.p`
  margin-bottom: 8px;
  font-family: 'Gordita Medium';
  font-size: 12px;
  color: ${(props) => props.theme.colors.preto};
  line-height: 17.1px;
`;
export const CartItemPrice = styled.p`
  font-family: 'Gordita Medium';
  font-size: 14px;
  color: ${(props) => props.theme.colors.validar};
  line-height: 19.95px;
  margin: 0;
`;

export const DeleteIcon = styled(FaTrashAlt)`
  cursor: pointer;
  color: ${(props) => props.theme.colors.placeholder};
  margin-left: 14px;
`;
