import styled, {css} from "styled-components/native";
import { FontAwesome } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  ${({theme}) => css`
    height: 18%;

    padding: 24px;
    padding-top: 32px;

    background-color: ${theme.colors.primary};

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const UserContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserPhoto = styled.Image`
    height: 48px;
    width: 48px;
    
    border-radius: 5px;
    background-color: ${({theme}) => theme.colors.white};
`;

export const UserName = styled.Text`
  ${({theme}) => css`
    margin-left: 16px;
    font-size: 20px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.white};
  `}
`;

export const UserBold = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fonts.bold};
  `}
`;

export const SignUpButton = styled.TouchableOpacity``;

export const Icon = styled(FontAwesome)`
  color: ${({theme}) => theme.colors.white};
`;
