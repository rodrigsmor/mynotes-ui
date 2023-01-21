import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { theme } from './styles/theme/theme';
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globalStyle';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
