import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

interface LoadProps {
  size?: 'small' | 'large';
}

const Load = ({ size = 'small'}: LoadProps) => {
  return(
    <Container>
      <ActivityIndicator size={size} />
    </Container>
  );
}

export default Load;