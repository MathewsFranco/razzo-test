import React from 'react';
import { useSelector } from 'react-redux';
import MenuItem from '../MenuItem';

const MenuList = () => {
  const menuItems = useSelector((state) => state.menuItems);
  console.log(`🚀 ~ menuItems`, menuItems);

  return (
    <>
      {menuItems.map((item) => (
        <MenuItem />
      ))}
    </>
  );
};

export default MenuList;
