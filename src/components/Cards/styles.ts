import styled from 'styled-components/native';

export const CardsContainer = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})`
  /* margin-top: 16px;
  margin-bottom: 48px; */
  
  flex-grow: 0;
`;


export const EmptyContainer = styled.View`
  width: 100%;
  height: 200px;

  margin-bottom: 10px;

  justify-content: center;
  align-items: center;
`;