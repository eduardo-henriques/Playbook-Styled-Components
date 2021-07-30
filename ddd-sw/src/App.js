import { ThemeProvider } from 'styled-components';

import { Container, Text } from './styles';
import { theme } from './theme';
import GlobalStyles from './theme/global';
import Login from './pages/SignedOut/Login';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Login />
      </Container>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
