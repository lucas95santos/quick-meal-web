import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// drawer
import { Drawer } from './components';
// routes
import Routes from './routes';
// context
import ContextProvider from './contexts/global';

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes />
        <Drawer />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
