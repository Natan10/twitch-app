import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { Cards } from '../../components/Cards';
import { Banners } from '../../components/Banners';
import Load from '../../components/Load';


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
  const { user, userToken, signOut } = useAuth();

  const [banners, setBanners] = useState([]);
  const [isLoadBanners, setIsLoadBanners] = useState(true);

  const loadBannerData = async () => {
    await fetch('https://api.twitch.tv/helix/games/top', {
      headers: {
        'Client-ID': process.env.CLIENT_ID,
        'Authorization': `Bearer ${userToken}`
      }
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setBanners(res.data)
    })
    .catch(error => {
      console.log(error);
      Alert.alert('Erro ao carregar jogos');
    })
    .finally(() => setIsLoadBanners(false));
  }

  const loadCarsData = async () => {};

  useEffect(() => {
    loadBannerData();
  },[]);

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
        {isLoadBanners ? <Load size='large' /> : <Banners data={banners} />}
      </Body>
    </Container>
  )
}