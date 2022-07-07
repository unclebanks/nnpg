import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import currencyReducer from './utils/CurrencySlice';
import ballReducer from "./utils/BallSlice";
import settingReducer from "./utils/SettingsSlice";
import locationReducer from "./utils/LocationSlice";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore(
  {
    reducer: {
      currency: currencyReducer,
      balls: ballReducer,
      settings: settingReducer,
      location: locationReducer
    }
  }
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);