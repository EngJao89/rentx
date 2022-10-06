import React from 'react';
import { BackButton } from '../../components/BackButton';
import theme from '../../styles/theme';

import ArrowSvg from '../../assets/arrow.svg';

import { 
  Container, 
  Header, 
  Title, 
  RentalPeriod, 
  DateInfo, 
  DateTitle, 
  DateValue, 
  Footer, 
  Content,

} from './styles';
import { StatusBar } from 'react-native';

export function Scheduling() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <BackButton 
          onPress={() => {}} 
          color={theme.colors.shape}
        />

        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
              <DateValue selected={false}>
                18/06/2022
              </DateValue>
          </DateInfo>
        </RentalPeriod>

        <ArrowSvg/>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
              <DateValue selected={false}>
                22/06/2022
              </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>

      </Content>

      <Footer>

      </Footer>
    </Container>
  );
}