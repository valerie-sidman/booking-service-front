import React from 'react';
import ReactDOM from 'react-dom';
import './css/normalize.css';
import './css/styles.css';
import './css-client/css/normalize.css';
import './css-client/css/styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
