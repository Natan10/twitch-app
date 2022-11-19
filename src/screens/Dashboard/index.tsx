import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { CardDto, Cards, CardStreamerInfoDto } from '../../components/Cards';
import { BannerDto, Banners } from '../../components/Banners';
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

const uri = 'https://doodleipsum.com/700/avatar?i=de119c2260fd4f6406f2450773e96262';
       
export const Dashboard = () => {
  const { user, signOut } = useAuth();

  const [banners, setBanners] = useState<BannerDto[]>([]);
  const [cards, setCards] = useState<CardStreamerInfoDto[]>([]);
  const [isLoadBanners, setIsLoadBanners] = useState(true);
  const [isLoadCards, setIsLoadCards] = useState(true);
  
  const loadBannerData = async () => {
    try {
      const { data } = await api.get('/games/top');
      setBanners(data.data);
    } catch (error) {
      console.log(error);
      Alert.alert('Erro ao carregar jogos');
    } finally {
      setIsLoadBanners(false)
    }
  }

  const loadCardsData = async () => {
    try {
      const { data } = await api.get<{data: CardDto[]}>(`/streams/followed?user_id=${user.id}`);
      const formattedResponse = await getStreamersProfile(data.data);
      setCards(formattedResponse);
    } catch (error) {
      console.log(error);
      Alert.alert('Erro ao carregar streamers');
    } finally {
      setIsLoadCards(false);
    }
  };

  const getStreamersProfile = async (cards: CardDto[]) => {
    return Promise.all(cards.map(async cardInfo => {
      try{
        const { data } = await api.get(`/users?id=${cardInfo.user_id}`);
        const streamer_profile_url = data.data[0].profile_image_url;
        return {...cardInfo, streamer_profile_url};
      } catch(error) {
        return {
          ...cardInfo,
          streamer_profile_url: 'https://static-cdn.jtvnw.net/user-default-pictures-uv/cdd517fe-def4-11e9-948e-784f43822e80-profile_image-300x300.png'
        }
      }
    }));
  };


  useEffect(() => {
    loadBannerData();
    loadCardsData();
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
        {isLoadCards ? <Load size='large' /> : <Cards data={cards} />}
        <Title>Mais assistidos no momento</Title>
        {isLoadBanners ? <Load size='large' /> : <Banners data={banners} />}
            
      </Body>
    </Container>
  )
}