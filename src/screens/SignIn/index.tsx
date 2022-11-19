import React from 'react';

import { useAuth } from '../../hooks/auth';

import ImageLogo from '../../assets/logo.svg';

import {
  Container,
  ImageContainer,
  Footer,
  Header,
  Title,
  TitleBold,
  SubTitle,
  BodyTitle,
  LoginButton,
  Icon,
  IconContainer,
  ButtonText,
} from './styles';


export const SignIn: React.FC = () => {
  const {signIn} = useAuth();

  return(
    <Container>
      <ImageContainer>
        <ImageLogo />
      </ImageContainer>
      <Footer>
        <Header>
          <Title>
            stream.<TitleBold>data</TitleBold>
          </Title>
          <SubTitle>by twitch</SubTitle>
        </Header>

        <BodyTitle>
          Veja dados {'\n'}
          interessantes sobre {'\n'}
          o mundo da Twitch
        </BodyTitle>

        <LoginButton onPress={signIn}>
          <IconContainer>
            <Icon name="twitch" size={24} />
          </IconContainer>
          <ButtonText>Entrar com Twitch</ButtonText>
        </LoginButton>
      </Footer>
    </Container>
  );
}