import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App.jsx';
import { Provider } from 'react-redux';
import './index.css';
import { persistor, store } from 'redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import '@fontsource/roboto/400.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="goit-react-hw-08-phonebook">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
