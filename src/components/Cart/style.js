import styled, { css } from 'styled-components';

export const CartWrapper = styled.div`
  background: ${(props) => props.theme.colors.branco};
  width: 423px;
  display: flex;
  flex-direction: column;
`;

export const CartItems = styled.div`
  background: ${(props) => props.theme.colors.fundoCards};
  padding-top: 40.3px;
  border-radius: 7px 7px 0 0;
  width: 428px; /*original value + the custom scrollbar width */
  height: 100vh;
  ${(props) => props.theme.scrollBar}
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const CartBtn = styled.button`
  ${({ primary, secondary, theme }) => css`
    cursor: pointer;
    border: none;
    border-radius: 7px;
    min-height: 51px;
    width: 423px;
    font-family: 'Gordita Medium';
    size: 13px;
    line-height: 18.52px;
    ${primary
      ? css`
          background: ${theme.colors.link};
          color: ${theme.colors.branco};
        `
      : secondary
      ? css`
          background: ${theme.colors.fundoCards};
          color: ${theme.colors.labelCampos};
          margin: 35px 0 16px 0;
        `
      : ''};
  `}
`;

export const PriceInfo = styled.section`
  padding-top: 20px;
  border-radius: 0 0 7px 7px;
  display: flex;
  flex-direction: column;
  width: 428px;
  background: ${(props) => props.theme.colors.fundoCards};
`;

export const PriceSpacer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.p`
  font-family: 'Gordita Regular';
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.textos};
  margin: 0 0 12px 25px;
`;

export const Value = styled.p`
  font-family: 'Gordita Medium';
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.preto};
  margin: 0 8px 12px 0;
`;

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  margin: 0 8px 12px 54px;
  color: ${(props) => props.theme.colors.contornoCampo};
`;
export const TotalLabel = styled.p`
  font-family: 'Gordita Medium';
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.preto};
  margin: 0 0 33px 25px;
`;
export const TotalValue = styled.p`
  font-family: 'Gordita Medium';
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.validar};
  margin: 0 8px 33px 0;
`;
