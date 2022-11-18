import React from 'react';

import { Cards } from '../../components/Cards';
import { Banners } from '../../components/Banners';

import {
  Container,
  Header,
  UserContainer,
  UserPhoto,
  UserName,
  UserBold,
  SignUpButton,
  Icon,
  Body,
  Title
} from './styles';

export const Dashboard = () => {
  return(
    <Container>
      <Header>
        <UserContainer>
          <UserPhoto
            source={{
              uri: 'https://doodleipsum.com/700/avatar?i=de119c2260fd4f6406f2450773e96262'
            }} 
          />
          <UserName>
            Ola,
            <UserBold> Natan</UserBold>
          </UserName>
        </UserContainer>
        <SignUpButton>
          <Icon name='power-off' size={24} />
        </SignUpButton>
      </Header>

      <Body>
        <Title>Canais que você segue</Title>
        <Cards /> 
        
        <Title>Mais assistidos no momento</Title>
        <Banners />
      </Body>
    </Container>
  )
}