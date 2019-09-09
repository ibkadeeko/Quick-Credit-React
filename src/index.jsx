import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import App from './app/index.jsx';
import './assets/styles/styles.scss';
import configureStore from './store/configureStore';

const store = configureStore();

const appRoot = document.getElementById('app');

ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  appRoot
);
