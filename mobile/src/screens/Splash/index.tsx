import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';

import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';

import Animated, { 
  useSharedValue, 
  useAnimatedStyle,
  withTiming,
  interpolate,  
  Extrapolate,
  runOnJS
}  from 'react-native-reanimated';

import {
  Container
} from './styles';

export function Splash(){
  
}