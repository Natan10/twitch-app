import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { useFonts } from 'expo-font';


import theme from './src/global/theme';

// import { SignIn } from './src/screens/SignIn';
import { Dashboard } from './src/screens/Dashboard';

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
      {/* <SignIn /> */}
      <Dashboard />
    </ThemeProvider>
  );
}

