import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { useFonts } from 'expo-font';

import theme from './src/global/theme';

import { AuthProvider } from './src/hooks/auth';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoading] = useFonts({
    DMSans_400Regular: require('./src/assets/fonts/DMSans-Regular.ttf'),
    DMSans_500Medium: require('./src/assets/fonts/DMSans-Medium.ttf'),
    DMSans_700Bold: require('./src/assets/fonts/DMSans-Bold.ttf'), 
  });

  if(!fontsLoading) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}

