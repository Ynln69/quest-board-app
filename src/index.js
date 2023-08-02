import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import { App } from 'components/App/App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import './index.scss';

const themes = {
  dark: '/dark.css',
  light: '/light.css',
  violet: '/violet.css',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeSwitcherProvider themeMap={themes} defaultTheme="dark">
        <BrowserRouter basename="/quest-board-app">
          <App />
        </BrowserRouter>
      </ThemeSwitcherProvider>
    </PersistGate>
  </Provider>
);
