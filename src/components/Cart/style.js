import styled, { css } from 'styled-components';

export const CartWrapper = styled.div`
  background: ${(props) => props.theme.colors.branco};
  width: 423px;
`;

export const Cart = styled.div`
  background: ${(props) => props.theme.colors.fundoCards};
  padding-top: 40.3px;
  max-height: 100%;
  width: 423px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const CartBtn = styled.button`
  ${({ primary, secondary, theme }) => css`
    cursor: pointer;
    border: none;
    border-radius: 7px;
    height: 51px;
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
