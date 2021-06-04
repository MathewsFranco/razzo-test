import React from 'react';
import * as Styled from './style';

const Link = ({ children, to }) => {
  return <Styled.CustomLink to={to}>{children}</Styled.CustomLink>;
};

export default Link;
