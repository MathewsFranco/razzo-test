import styled from 'styled-components';

export const Counter = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.vertical ? 'column-reverse' : 'row')};
`;

export const MinusButton = styled.button`
  cursor: pointer;
  background: ${(props) => props.theme.colors.link};
  color: ${(props) => props.theme.colors.simboloBotao};
  width: 34.7px;
  height: 40px;
  border-radius: ${(props) => (props.vertical ? '0 0 7px 7px' : '7px 0 0 7px')};
  border: none;
  font-family: 'Gordita Medium';
  font-size: 16px;
  line-height: 17.1px;
`;
export const CounterNumber = styled.div`
  cursor: pointer;
  background: ${(props) => props.theme.colors.link};
  color: ${(props) => props.theme.colors.fundoApp};
  min-width: 34.7px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlusButton = styled.button`
  cursor: pointer;
  background: ${(props) => props.theme.colors.link};
  color: ${(props) => props.theme.colors.simboloBotao};
  width: 34.7px;
  height: 40px;
  border-radius: ${(props) => (props.vertical ? '7px 7px 0 0' : '0 7px 7px 0')};
  border: none;
  font-family: 'Gordita Medium';
  font-size: 16px;
  line-height: 17.1px;
`;
