import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

export const Wrapper = styled.div`
  width: 303px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 100%;
  border: none;
  font-family: 'Gordita Regular';
  font-size: 13px;
  color: ${(props) => props.theme.colors.preto};
  line-height: 18.52px;

  ::placeholder {
    color: ${(props) => props.theme.colors.placeholder};
  }
`;
