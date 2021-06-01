import styled, { css } from 'styled-components';

export const Cart = styled.div`
  background: ${(props) => props.theme.colors.fundoCards};
  height: 703px;
  width: 423px;
`;

export const CartBtn = styled.button`
  ${({ primary, secondary, theme }) => css`
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
        `
      : ''};
  `}
`;
