import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './store';
import 'react-toastify/dist/ReactToastify.css';

//  Pages
import Main from './pages/Main';

import light from './assets/styles/themes/light';

import GlobalStyle from './assets/styles/global';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={light}>
      <Provider store={store}>
        <ToastContainer />
        <GlobalStyle />
        <Main />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
