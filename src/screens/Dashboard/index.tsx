import React from 'react';
import { FlatList, View } from 'react-native';

import { Card } from '../../components/Card';
import { Banner } from '../../components/Banner';

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
          
          <FlatList
            style={{marginTop: 16}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={Array.from(Array(5).keys())}
            keyExtractor={item => item.toString()}
            renderItem={({ item }) =>{ 
              return <Card />
            }}
            ItemSeparatorComponent={() =>
              <View style={{width: 16}} />
            }
          />

          <Title>Mais assistidos no momento</Title>

          <FlatList
            style={{marginTop: 16}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={Array.from(Array(5).keys())}
            keyExtractor={item => item.toString()}
            renderItem={({ item }) =>{ 
              return <Banner />
            }}
            ItemSeparatorComponent={() =>
              <View style={{width: 16}} />
            }
          />  
      </Body>
    </Container>
  )
}