import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Main from './pages/Main';
import light from './assets/styles/themes/light';

import GlobalStyle from './assets/styles/global';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
