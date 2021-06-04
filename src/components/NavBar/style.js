import styled from 'styled-components';
import { BiChevronDown } from 'react-icons/bi';

export const NavBar = styled.nav`
  position: sticky;
  background: #f7f9fc;
  height: 96px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Logo = styled.img`
  margin-left: 35px;
  width: 161px;
  height: 30px;
`;

export const NavLink = styled.p`
  cursor: pointer;
  margin-left: 150px;
  box-shadow: inset 0 -3px ${(props) => props.theme.colors.link};
  font-family: 'Gordita Medium';
  font-size: 14px;
  text-align: center;
  padding: 38px 0;
  color: ${(props) => props.theme.colors.link};
`;

export const CartIcon = styled.div`
  cursor: pointer;
  margin-right: 16px;
  border-radius: 50%;
  height: 48px;
  width: 48px;
  background: ${(props) => props.theme.colors.branco};
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    border-radius: 50%;
    height: 24px;
    width: 24px;
    margin: 3px 0 0 50px;
    content: '${(props) => props.notification}';
    background: ${(props) => props.theme.colors.link};
    position: absolute;
    top: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.branco};
    font-family: 'Gordita Regular';
    font-size: 10px;
  }
`;
export const Avatar = styled.img`
  margin-right: 11.33px;
  border-radius: 50%;
  height: 48px;
  width: 48px;
`;
export const ChevronDownIcon = styled(BiChevronDown)`
  color: ${(props) => props.theme.colors.auxiliar};
  margin-right: 58.33px;
`;

export const Wrapper = styled.div`
  height: 96px;
  display: flex;
  align-items: center;
`;
