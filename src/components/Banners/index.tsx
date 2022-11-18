import React from 'react';
import { View } from 'react-native';

import { Banner } from '../Banner';

import { BannersContainer } from './styles';

export const Banners = () => {
  return(
    <BannersContainer
      data={Array.from(Array(5).keys())}
      keyExtractor={item => item.toString()}
      renderItem={({ item }) =>{ 
        return <Banner />
      }}
      ItemSeparatorComponent={() =>
        <View style={{width: 16}} />
      }
    />
  );
}
