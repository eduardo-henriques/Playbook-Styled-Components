import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { ThemeProvider } from 'styled-components';

import { screenHeight } from './src/constants/styles/dimensions';
import Login from './src/pages/PlaybookPage';
import { Container } from './styles';
import { theme } from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Login />
        <FlashMessage
          position={{ top: screenHeight * 0.05 }}
          floating={true}
          style={{ minHeight: screenHeight * 0.08, alignItems: 'center' }}
          titleStyle={{
            fontWeight: 'bold',
            fontSize: screenHeight * 0.022,
          }}
        />
      </Container>
    </ThemeProvider>
  );
}
