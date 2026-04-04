import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/App/App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { GoogleOAuthProvider } from '@react-oauth/google';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <GoogleOAuthProvider clientId="5269346267-lumgtvi03lv5ojddgmpe4k23mipurmbi.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
