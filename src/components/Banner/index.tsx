import React from 'react';
import { Linking } from 'react-native';

import { 
  Container,
  BannerImage
} from './styles';


export interface BannerProps {
  id: string;
  name: string;
  url: string;
}

const mockPhoto = 'https://doodleipsum.com/700/hand-drawn?bg=D98D63&i=1a34c9aa724687844241454eebdfecdc';


export const Banner = ({id, name, url}: BannerProps) => {

  const bannerUrl = url ? url.replaceAll(/{width}|{height}/g, '300') : mockPhoto;

  return(
    <Container
      activeOpacity={0.5}
      onPress={() => Linking.openURL(`https://www.twitch.tv/directory/game/${encodeURI(name)}`)}
    >
      <BannerImage
       resizeMode='cover'
       source={{
        uri: bannerUrl
       }}
      />
    </Container>
  );
}
