import React from 'react';

import GasolineSvg from '../../assets/gasoline.svg';
import { RectButtonProps } from 'react-native-gesture-handler';

import { CarDTO } from '../../dtos/CarDTO';

import {  
  Container, 
  Details, 
  Brand, 
  Name, 
  About, 
  Rent, 
  Period, 
  Price, 
  Type,
  CarImage
} from './styles';

interface Props extends RectButtonProps{
  data: CarDTO;
}

export function Car({ data } : Props) {
  return (
    <Container>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.period}</Period>
            <Price>{`R$ ${data.price}`}</Price>
          </Rent>

          <Type>
            <GasolineSvg />
          </Type>
        </About>
      </Details>

      <CarImage 
        source={{ uri: data.thumbnail }} 
        resizeMode="contain"
      />

    </Container>
  );
}