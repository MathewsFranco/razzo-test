import Home from './pages/Home';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import FontStyles from './fonts/FontStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RestaurantMenu from './pages/RestaurantMenu';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <FontStyles />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/menu">
            <RestaurantMenu />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
