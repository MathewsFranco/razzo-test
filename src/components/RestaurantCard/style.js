import styled from 'styled-components';
import { IoLocationOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: none;
  :active,
  :focus {
    color: green;
  }
`;
export const RestaurantCard = styled.div`
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.contornoCampo};
  border-radius: 7px;
  margin: 23px;
  width: ${(props) => (props.inMenu ? `90%` : '290px')};
  height: 99px;
  display: flex;
`;

export const RestaurantImage = styled.img`
  margin: 16px 12px 16px 16px;
  width: 68px;
  height: 67px;
  border-radius: 7px;
  object-fit: cover;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0 16px;
`;

export const RestaurantName = styled.p`
  font-family: 'ABeeZee Regular';
  font-size: 13px;
  color: ${(props) => props.theme.colors.textoCampos};
  line-height: 18px;
  margin: 0;
`;

export const RestaurantTypeAndLocation = styled.p`
  font-family: 'Gordita Medium';
  font-size: 12px;
  color: ${(props) => props.theme.colors.link};
  line-height: 17.1px;
  margin: 0 0 4px 0;
`;

export const LocationIcon = styled(IoLocationOutline)`
  margin-left: 16px;
  color: ${(props) => props.theme.colors.textos};
`;

export const RestaurantAddress = styled.p`
  font-family: 'ABeeZee Regular';
  font-size: 12px;
  color: ${(props) => props.theme.colors.textos};
  line-height: 14px;
  margin: 0;
`;
