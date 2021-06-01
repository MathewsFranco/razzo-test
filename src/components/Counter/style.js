import styled from 'styled-components';
import { BiPlus, BiMinus } from 'react-icons/bi';

export const Counter = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.vertical ? 'column' : 'row')};
  min-width: ${(props) => (props.vertical ? '40px' : '104px')};
  min-height: ${(props) => (props.vertical ? '92px' : '40px')};
`;

export const MinusButton = styled.button`
  cursor: pointer;
  background: ${(props) => props.theme.colors.link};
  color: ${(props) => props.theme.colors.simboloBotao};
  min-width: ${(props) => (props.vertical ? '40px' : '34.7px')};
  height: ${(props) => (props.vertical ? '34.7px' : '40px')};
  border-radius: ${(props) => (props.vertical ? '7px 7px 0 0' : '7px 0 0 7px')};
  border: none;
  font-family: 'Gordita Medium';
  font-size: 16px;
  line-height: 17.1px;
  padding: 0;
`;

export const CounterNumber = styled.div`
  cursor: pointer;
  background: ${(props) => props.theme.colors.link};
  color: ${(props) => props.theme.colors.fundoApp};
  min-width: 34.7px;
  height: ${(props) => (props.vertical ? '34.7px' : '40px')};
  min-width: ${(props) => (props.vertical ? '40px' : '34.7px')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

export const PlusButton = styled.button`
  cursor: pointer;
  background: ${(props) => props.theme.colors.link};
  color: ${(props) => props.theme.colors.simboloBotao};
  min-width: ${(props) => (props.vertical ? '40px' : '34.7px')};
  height: ${(props) => (props.vertical ? '34.7px' : '40px')};
  border-radius: ${(props) => (props.vertical ? '0 0 7px 7px' : '0 7px 7px 0')};
  border: none;
  padding: 0;
`;

export const PlusIcon = styled(BiPlus)`
  color: ${(props) => props.theme.colors.simboloBotao};
  font-size: 16px;
`;

export const MinusIcon = styled(BiMinus)`
  color: ${(props) => props.theme.colors.simboloBotao};
  font-size: 16px;
  margin-bottom: ${(props) => (props.vertical ? '7px 7px 0 0' : '0 7px 7px 0')};
`;
