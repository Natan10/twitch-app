import React from 'react';

import {
  Container,
  Header,
  UserContainer,
  UserPhoto,
  UserName,
  UserBold,
  SignUpButton,
  Icon
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

    </Container>
  )
}