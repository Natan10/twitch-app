import React from "react";
import { 
  Container, 
  ImageContainer,
  ImageBg, 
  LegendCard,
  StreamerContainer,
  StreamerPhoto,
  StreamerTitle,
  StreamerInfo,
  StreamerName,
} from "./styles";

interface CardProps {
  url: string;
  streamerViewers: number;
  streamerName: string;
  streamerTitle: string;
  streamerPhotoUrl: string;
}

const mockPhoto = 'https://doodleipsum.com/700/hand-drawn?bg=D98D63&i=1a34c9aa724687844241454eebdfecdc';

export const Card = ({
  url, 
  streamerName, 
  streamerTitle, 
  streamerViewers,
  streamerPhotoUrl
}: CardProps) => {
  const cardUrl = url ? url.replace('{width}x{height}', '450x400') : mockPhoto;

  return(
    <Container>
      <ImageContainer>
        <ImageBg
          resizeMode='cover'
          source={{
            uri: cardUrl
          }}
        >
          <LegendCard>{streamerViewers} seguidores</LegendCard>
        </ImageBg>
      </ImageContainer>

      <StreamerContainer>
        <StreamerPhoto
          resizeMode="cover"
          source={{
            uri: streamerPhotoUrl
          }}
        />
        <StreamerInfo>
          <StreamerTitle numberOfLines={1}>
            {streamerTitle}
          </StreamerTitle>
          <StreamerName>{streamerName}</StreamerName>
        </StreamerInfo>
      </StreamerContainer>
    </Container>
  )
}