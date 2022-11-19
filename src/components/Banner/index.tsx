import React from 'react';

import { 
  Container,
  BannerImage
} from './styles';


export interface BannerProps {
  id: string;
  name: string;
  url: string;
}

export const Banner = ({id, name, url}: BannerProps) => {

  const bannerUrl = url.replaceAll(/{width}|{height}/g, '300');

  return(
    <Container>
      <BannerImage
       resizeMode='cover'
       source={{
        uri: bannerUrl
       }}
      />
    </Container>
  );
}
