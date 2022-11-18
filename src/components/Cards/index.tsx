import React from 'react';
import { View } from 'react-native';

import { Card } from '../Card';

import { CardsContainer } from './styles';

export const Cards = () => {
  return(
    <CardsContainer
      data={Array.from(Array(5).keys())}
      keyExtractor={item => item.toString()}
      renderItem={({ item }) =>{ 
        return <Card />
      }}
      ItemSeparatorComponent={() =>
        <View style={{width: 16}} />
      }
    />
  );
}
