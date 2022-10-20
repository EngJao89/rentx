import React, {useEffect, useState} from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { useTheme } from 'styled-components'; 
import { useNavigation, useRoute } from '@react-navigation/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { api } from '../../services/api';

import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate
} from 'react-native-reanimated';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { CarDTO } from '../../dtos/CarDTO';

import { 
  Container, 
  Header, 
  CarImages, 
  Content, 
  Details, 
  Description, 
  Brand, 
  Name, 
  Rent, 
  Period,
  Price, 
  About, 
  Accessories, 
  Footer
} from './styles';

interface Params {
  car: CarDTO
}

export function CarDetails() {
  const [carUpdate, setCarUpdate] = useState<CarDTO>({} as CarDTO);

  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  const theme = useTheme();

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;    
  });

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 70],
        Extrapolate.CLAMP
      ),
    }
  });

  const sliderCarsStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [0, 150],
        [1, 0],
        Extrapolate.CLAMP
      )
    }
  });

  function handleConfirmRental() {
    navigation.navigate('Scheduling', { car: carUpdate });
  }

  function handleBack(){
    navigation.goBack();    
  }

  return (
    <Container>
      <Animated.View
        style={[
          headerStyleAnimation, 
          styles.header,
          { backgroundColor: theme.colors.background_secondary}
        ]}
      >
        <Header>
          <BackButton onPress={handleBack} />
        </Header>

        <Animated.View style={sliderCarsStyleAnimation}>
          <CarImages>
            <ImageSlider imagesUrl={['https://i.pinimg.com/originals/32/8a/05/328a05f1c3142221aed4f9c20fe9fef0.png']} />
          </CarImages>
        </Animated.View>
      </Animated.View>

        <Content>
          <Details>
            <Description>
              <Brand>{car.brand}</Brand>
              <Name>{car.name}</Name>
            </Description>

            <Rent>
              <Period>{car.period}</Period>
              <Price>{car.price}</Price>
            </Rent>
          </Details>

          {
            carUpdate.accessories &&
            <Accessories>
              {
                carUpdate.accessories.map(accessory => (
                  <Accessory 
                    key={accessory.type}
                    name={accessory.name}
                    icon={getAccessoryIcon(accessory.type)}
                  />
                ))
              }
            </Accessories>
          }

          <About>
            Este é automóvel desportivo. Surgio do lendário touro de lide indultado
            na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta 
            de acelerar.
          </About>
        </Content>

        <Footer>
        <Button 
            title="Escolher período do aluguel" 
            onPress={handleConfirmRental}
          />
        </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    overflow: 'hidden', 
    zIndex: 1,
  },
})