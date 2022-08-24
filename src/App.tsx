import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ShoppingProvider } from './contexts/ShoppingContext';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ShoppingProvider>
          <Router />
        </ShoppingProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
