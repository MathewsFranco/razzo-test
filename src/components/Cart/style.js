import styled, { css } from 'styled-components';

export const CartWrapper = styled.div`
  background: ${(props) => props.theme.colors.branco};
  width: 423px;
  display: flex;
  flex-direction: column;
`;

export const Cart = styled.div`
  background: ${(props) => props.theme.colors.fundoCards};
  padding-top: 40.3px;
  width: 423px;
  height: calc(100vh - 175px - 49px);
  overflow-y: scroll;
  overflow-x: hidden;
  ${(props) => props.theme.scrollBar}
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
