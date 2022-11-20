import styled from "styled-components/native";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MotiView } from 'moti';


export const Container = styled(MotiView)`
  flex: 1;
`;

export const ImageContainer = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  height: 60%;

  align-items: center;
  justify-content: center;
`;

export const Footer = styled.View`
  height: 40%;
  background-color: ${({theme}) => theme.colors.black};

  padding: 32px 48px 14px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-size: 20px;
  font-family: ${({theme}) => theme.fonts.medium};
`;

export const TitleBold = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.bold};
`;

export const SubTitle = styled.Text`
  color: ${({theme}) => theme.colors.font_primary};
  font-size: 15px;
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const BodyTitle = styled.Text`
  margin-top: 48px;

  color: ${({theme}) => theme.colors.white};
  font-size: 25px;
  font-family: ${({theme}) => theme.fonts.bold};
`;

export const LoginButton = styled.TouchableOpacity`
  width: 100%;
  height: 56px;

  margin-top: 40px;

  flex-direction: row;
  align-items: center;

  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 10px;
`;

export const IconContainer = styled.View`
  height: 100%;
  padding: 18px 16px;

  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.colors.primary_opacity};
  border-right-width: 1px;
  border-color: ${({theme}) => theme.colors.primary_opacity};

  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const Icon = styled(FontAwesome5)`
  color: ${({theme}) => theme.colors.white};
`;

export const ButtonText = styled.Text`
  flex: 1;
  text-align: center;

  font-size: 15px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.white};
`;
