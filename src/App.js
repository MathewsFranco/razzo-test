import Home from './pages/Home';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import FontStyles from './fonts/FontStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FontStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
