import styled, {css} from "styled-components/native";
import { FontAwesome } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  ${({theme}) => css`
    height: 128px;

    padding: 0px 24px;
    /* padding-top: 32px; */

    background-color: ${theme.colors.primary};

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const UserContainer = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 32px;
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

export const SignUpButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const Icon = styled(FontAwesome)`
  color: ${({theme}) => theme.colors.white};
`;


// Body styles

export const Body = styled.View`
  ${({theme}) => css`
    padding: 24px 32px;

    flex: 1;
    background-color: ${theme.colors.black};
  `}
`;

export const Title = styled.Text`
  ${({theme}) => css`
    font-size: 20px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.white};
  `}
`;