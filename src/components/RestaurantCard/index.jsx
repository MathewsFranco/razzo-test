import React from 'react';
import * as Styled from './style';

const RestaurantCard = ({
  imgSource = 'https://via.placeholder.com/68x67',
  restaurantName = 'Restaurant Name',
  restaurantType = 'Restaurant Type',
  restaurantStreet = 'Restaurant Address',
  restaurantNum = 'Restaurant Address',
  restaurantNeighborhood = 'Restaurant Address',
  onClick,
  inMenu = false,
  restaurantId,
}) => {
  return (
    <Styled.CustomLink to={`/menu/${restaurantId}`}>
      <Styled.RestaurantCard inMenu={inMenu} onClick={onClick}>
        <Styled.RestaurantImage src={imgSource} />
        <Styled.InfoWrapper>
          <Styled.RestaurantName>{restaurantName}</Styled.RestaurantName>
          <Styled.RestaurantTypeAndLocation>
            {restaurantType}
            <Styled.LocationIcon />
          </Styled.RestaurantTypeAndLocation>
          <Styled.RestaurantAddress>
            Rua: {restaurantStreet}, {restaurantNum}
            <br /> {restaurantNeighborhood}
          </Styled.RestaurantAddress>
        </Styled.InfoWrapper>
      </Styled.RestaurantCard>
    </Styled.CustomLink>
  );
};

export default RestaurantCard;
