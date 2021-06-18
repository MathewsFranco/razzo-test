import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

export const Wrapper = styled.div`
  max-width: 303px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 7px;
  border: 1px solid ${(props) => props.theme.colors.contornoCampo};
  margin-left: 23px;
  padding-left: 16px;
`;

export const SearchBtn = styled.div`
  width: 53.69px;
`;

export const SearchIcon = styled(BiSearch)`
  color: ${(props) => props.theme.colors.placeholder};
  font-size: 16px;
`;

export const SearchBar = styled.input`
  height: 45px;
  border: none;
  font-family: 'Gordita Regular';
  font-size: 13px;
  color: ${(props) => props.theme.colors.preto};
  line-height: 18.52px;

  ::placeholder {
    color: ${(props) => props.theme.colors.placeholder};
  }

  :active {
    border: none;
  }

  :focus-visible {
    outline: none;
  }
`;
