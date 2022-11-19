import React from 'react';
import { View } from 'react-native';

import { Banner, BannerProps } from '../Banner';

import { BannersContainer } from './styles';

export interface BannerDto {
  id: string;
  name: string;
  box_art_url: string;
}

interface BannersProps {
  data: BannerDto[];
}


export const Banners = ({data}: BannersProps) => {
  return(
    <BannersContainer
      data={data}
      maxToRenderPerBatch={5}
      initialNumToRender={5}
      getItemLayout={(_, index) => (
        {length: 216, offset: 216*index, index}
      )}
      keyExtractor={(item: BannerDto) => item.id}
      renderItem={({ item }: any) => {
        return <Banner id={item.id} name={item.name} url={item.box_art_url} />
      }}
      ItemSeparatorComponent={() =>
        <View style={{width: 16}} />
      }
    />
  );
}
