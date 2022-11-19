import React from 'react';
import { View } from 'react-native';

import { Card } from '../Card';

import { CardsContainer } from './styles';

export interface CardDto {
  id: string;
  user_id: string;
  user_login: string;
  user_name: string;
  game_id: string;
  game_name: string;
  type: string;
  title: string;
  viewer_count: number;
  started_at: string;
  language: string;
  thumbnail_url: string;
  tag_ids: string[];
  is_mature: boolean;
}

export interface CardStreamerInfoDto extends CardDto {
  streamer_profile_url: string;
}

interface CardsProps {
  data: CardStreamerInfoDto[];
}


export const Cards = ({ data }: CardsProps) => {
  return(
    <CardsContainer
      data={data}
      keyExtractor={(item: CardDto) => item.id}
      renderItem={({ item }: any) =>{
        
        return <Card 
          url={item.thumbnail_url}
          streamerName={item.user_name}
          streamerTitle={item.title}
          streamerViewers={item.viewer_count}
          streamerPhotoUrl={item.streamer_profile_url}
        />
      }
        
      }
      ItemSeparatorComponent={() =>
        <View style={{width: 16}} />
      }
    />
  );
}
