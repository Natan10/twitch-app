import React from 'react';

import { 
  Container,
  BannerImage
} from './styles';

export const Banner = () => {
  return(
    <Container>
      <BannerImage
       resizeMode='cover'
       source={{
        uri: 'https://doodleipsum.com/700/hand-drawn?bg=D98D63&i=1a34c9aa724687844241454eebdfecdc'
       }}
      />
    </Container>
  );
}
