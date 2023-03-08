import React from 'react';

import AppProvider from 'hooks';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { CSSVariables } from 'styles/CSSVariables';

import Routes from './routes';
import GlobalStyle from './styles/global';

import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <CSSVariables>
        <ToastContainer />
        <Routes />
        <GlobalStyle />      
      </CSSVariables>
    </AppProvider>
  </BrowserRouter>
);

export default App;
