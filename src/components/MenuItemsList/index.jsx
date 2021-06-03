import React from 'react';
import { useSelector } from 'react-redux';
import MenuItem from '../MenuItem';

const MenuList = () => {
  const menuItems = useSelector((state) => state.menuItems);
  console.log(`🚀 ~ menuItems`, menuItems);

  return (
    <>
      {menuItems.map((item) => (
        <MenuItem
          key={item._id}
          menuItemImg={item.imgs[1].url}
          menuItemName={item.name}
          menuItemDescription={item.description}
          menuItemPrice={item.pricing}
        />
      ))}
    </>
  );
};

export default MenuList;
