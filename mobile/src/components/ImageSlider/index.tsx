import React from 'react';

import { 
  Container, 
  ImageIndexes, 
  ImageIndex, 
  CarImageWrapper, 
  CarImage
} from './styles';

interface Props {
  imagesUrl: string[];
}

export function ImageSlider({imagesUrl}: Props) {
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexes>

      <CarImageWrapper>
        <CarImage
          source={{ uri: 'https://i.pinimg.com/originals/32/8a/05/328a05f1c3142221aed4f9c20fe9fef0.png' }} 
          resizeMode="contain"
        />
      </CarImageWrapper>
    </Container>
  );
}