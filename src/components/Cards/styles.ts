import styled from 'styled-components/native';

export const CardsContainer = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})`
  margin-top: 16px;
  margin-bottom: 48px;
  
  flex-grow: 0;
`;
