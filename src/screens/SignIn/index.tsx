import React from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';
import { useTheme } from 'styled-components';

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
  const {signIn, signInLoad} = useAuth();
  const theme = useTheme();

  return(
    <Container
      from={{ opacity: 0, scale: 0.9 }}
      animate={{opacity: 1, scale: 1}}
      exit={{opacity: 0, scale: 0.9}}
    >
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
            {signInLoad ? 
              <ActivityIndicator size={20} color={theme.colors.white} /> :
              <Icon name="twitch" size={24} />
             }
            </IconContainer>
          <ButtonText>
            {signInLoad ? `Entrando...` : `Entrar com Twitch`}
          </ButtonText>
        </LoginButton>
      </Footer>

      <Modal
        animationType='fade'
        visible={signInLoad}
        statusBarTranslucent
        transparent
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(14,14,16,0.6)'
          }} 
        />
      </Modal>
    </Container>
  );
}