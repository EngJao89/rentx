import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import { 
  Container, 
  Header, 
  CarImages 
} from './styles';

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={['https://i.pinimg.com/originals/32/8a/05/328a05f1c3142221aed4f9c20fe9fef0.png']} />
      </CarImages>
    </Container>
  );
}