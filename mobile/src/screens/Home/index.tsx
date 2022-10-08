import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';
import { Price } from '../../components/Car/styles';

import { 
  Container, 
  Header, 
  TotalCars, 
  HeaderContent, 
  CarList
} from './styles';

export function Home() {
  const navigation = useNavigation();

  const carData = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail: 'https://i.pinimg.com/originals/32/8a/05/328a05f1c3142221aed4f9c20fe9fef0.png'
  }

  function handleCarDetails() {
    navigation.navigate('CarDetails')    
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

      <CarList
        data={[1,2,3,4,5,6,7]} 
        keyExtractor={item => String(item)}
        renderItem={({ item}) => 
        <Car data={carData} onPress={handleCarDetails}/>}
      />

    </Container>
  );
}