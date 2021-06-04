import React from 'react';
import * as Styled from './style';
import logo from '../../img/razzo-logo.png';
import userAvatar from '../../img/user-avatar.png';
import { IoBagOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const amountInCart = useSelector((state) => state.cart).length;
  return (
    <Styled.NavBar>
      <Styled.Wrapper>
        <Styled.Logo src={logo} alt="Razzo logo" />
        <Styled.NavLink>Dashboard</Styled.NavLink>
      </Styled.Wrapper>
      <Styled.Wrapper>
        <Styled.CartIcon notification={amountInCart}>
          <IoBagOutline />
        </Styled.CartIcon>
        <Styled.Avatar src={userAvatar} />
        <Styled.ChevronDownIcon size={27} />
      </Styled.Wrapper>
    </Styled.NavBar>
  );
};

export default NavBar;
