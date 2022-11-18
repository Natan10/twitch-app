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

export const Card = () => {
  return(
    <Container>
      <ImageContainer>
        <ImageBg
          source={{
            uri: 'https://doodleipsum.com/700/hand-drawn?bg=FF3C3C&i=38669f43d56c05c7a0eacf970d68e8fd'
          }}
        >
          <LegendCard>29,4 mil seguidores</LegendCard>
        </ImageBg>
      </ImageContainer>

      <StreamerContainer>
        <StreamerPhoto />
        <StreamerInfo>
          <StreamerTitle numberOfLines={1}>
            Um passarinho me contou ddddddxxxxxxxdccccc
          </StreamerTitle>
          <StreamerName>Alanzoka</StreamerName>
        </StreamerInfo>
      </StreamerContainer>
    </Container>
  )
}