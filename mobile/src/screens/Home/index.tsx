import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';
import { Price } from '../../components/Car/styles';

import { 
  Container, 
  Header, 
  TotalCars, 
  HeaderContent 
} from './styles';

export function Home() {
  const carDataOne = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail: 'https://i.pinimg.com/originals/32/8a/05/328a05f1c3142221aed4f9c20fe9fef0.png'
  }

  const carDataTwo = {
    brand: 'Porsche',
    name: 'Panamera',
    rent: {
      period: 'AO DIA',
      price: 340,
    },
    thumbnail: 'https://www.pngplay.com/wp-content/uploads/13/Porsche-Panamera-Transparent-Background.png'
  }

  return (
    <Container >
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <HeaderContent>
          <Logo 
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total 12 Carros
          </TotalCars>
        </HeaderContent>
      </Header>

      <Car data={carDataOne}/>
      <Car data={carDataTwo}/>

    </Container>
  );
}