import styled, { css } from 'styled-components/native'
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import Animated from 'react-native-reanimated'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;

    background-color: ${theme.colors.background_secondary};
  `}
`
export const AnimatedHeaderAndSlider = styled(Animated.View)`
  ${({ theme }) => css`
    position: absolute;
    overflow: hidden;
    z-index: 1;
    background-color: ${theme.colors.background_secondary};
  `}
`
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 24px;
`
export const AnimatedCarImages = styled(Animated.View)`
  margin-top: ${getStatusBarHeight() + 32}px;
`

export const AnimatedContent = styled(Animated.ScrollView).attrs({
  contentContainerStyle: {
    paddingHorizontal: 24,
    paddingTop: getStatusBarHeight() + 160
  },
  showsVerticalScrollIndicator: false
})``

export const Details = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 38px;
`
export const Description = styled.View``

export const Brand = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    color: ${theme.colors.text_detail};
    font-size: ${RFValue(10)}px;

    text-transform: uppercase;
  `}
`
export const Name = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    color: ${theme.colors.title};
    font-size: ${RFValue(25)}px;
  `}
`
export const Rent = styled.View``

export const Period = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    color: ${theme.colors.text_detail};
    font-size: ${RFValue(10)}px;

    text-transform: uppercase;
  `}
`
export const Price = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    color: ${theme.colors.main};
    font-size: ${RFValue(25)}px;
  `}
`

export const About = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_400};
    color: ${theme.colors.text};
    font-size: ${RFValue(15)}px;
    text-align: justify;
    line-height: ${RFValue(25)}px;

    margin-top: 23px;
  `}
`

export const Accessories = styled.View`
  width: 100%;

  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  margin-top: 16px;
`

export const Footer = styled.View`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.background_secondary};

  padding: 24px 24px ${getBottomSpace() + 24}px;

  //getBottomSpace() pega o risco que tem abaixo do iPhone
`

export const OfflineInfo = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_400};
    color: ${theme.colors.main};
    font-size: ${RFValue(10)}px;
    text-align: justify;
  `}
`