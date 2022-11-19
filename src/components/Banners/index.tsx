import React from 'react';
import { View } from 'react-native';

import { Banner, BannerProps } from '../Banner';

import { BannersContainer } from './styles';

export interface DataDto {
  id: string;
  name: string;
  box_art_url: string;
}

interface BannersProps {
  data: DataDto[];
}


export const Banners = ({data}: BannersProps) => {
  return(
    <BannersContainer
      data={data}
      keyExtractor={(item: DataDto) => item.id}
      renderItem={({ item }: any) => {
        return <Banner id={item.id} name={item.name} url={item.box_art_url} />
      }}
      ItemSeparatorComponent={() =>
        <View style={{width: 16}} />
      }
    />
  );
}
