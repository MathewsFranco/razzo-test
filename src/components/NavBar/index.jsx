import React from 'react';
import * as Styled from './style';
import logo from '../../img/razzo-logo.png';
import userAvatar from '../../img/user-avatar.png';
import { IoBagOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import Link from '../Link';

const NavBar = () => {
  const amountInCart = useSelector((state) => state.cart).length;
  function toggleCart() {
    console.log('showCart or hideCart');
  }
  return (
    <Styled.NavBar>
      <Styled.Wrapper>
        <Link to={'/'}>
          <Styled.Logo src={logo} alt="Razzo logo" />
        </Link>
        <Link to={'/'}>
          <Styled.NavLink>Dashboard</Styled.NavLink>
        </Link>
      </Styled.Wrapper>
      <Styled.Wrapper>
        <Styled.CartIcon
          notification={amountInCart}
          onClick={() => toggleCart()}
        >
          <IoBagOutline />
        </Styled.CartIcon>
        <Styled.Avatar src={userAvatar} />
        <Styled.ChevronDownIcon size={27} />
      </Styled.Wrapper>
    </Styled.NavBar>
  );
};

export default NavBar;
