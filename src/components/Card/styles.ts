import styled, {css} from "styled-components/native";

export const Container = styled.View`
  width: 260px;
`;

export const ImageContainer = styled.TouchableOpacity`
  height: 144px;
`;

export const ImageBg = styled.ImageBackground.attrs({
  imageStyle: {
    borderRadius: 10
  }
})`
  flex: 1;
  justify-content: flex-end;
`;

export const LegendCard = styled.Text`
  ${({theme}) => css`
    font-size: 13px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.white};

    margin-left: 12px;
    margin-bottom: 12px;
  `}
`;

export const StreamerContainer = styled.View`
  margin-top: 16px;
  flex-direction: row;
`;

export const StreamerPhoto = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const StreamerInfo = styled.View`
  margin-left: 16px;
  flex: 1;
`;

export const StreamerTitle = styled.Text`
  ${({theme}) => css`
    font-size: 15px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.white};
  `}
`;

export const StreamerName = styled.Text`
  ${({theme}) => css`
    margin-top: 4px;
    
    font-size: 15px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.font_secondary};
  `}
`;
