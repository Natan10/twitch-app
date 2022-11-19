import React from 'react';

import { useAuth } from '../../hooks/auth';

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

const uri = 'https://doodleipsum.com/700/avatar?i=de119c2260fd4f6406f2450773e96262'
       

export const Dashboard = () => {
  const { user, signOut } = useAuth();

  return(
    <Container>
      <Header>
        <UserContainer>
          <UserPhoto
            source={{
              uri: user.photo ? user.photo : uri
            }} 
          />
          <UserName numberOfLines={2}>
            Ola,
            <UserBold> {user.name}</UserBold>
          </UserName>
        </UserContainer>
        <SignUpButton onPress={signOut}>
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