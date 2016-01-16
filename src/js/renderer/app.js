import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './containers/App';
import configureStore from './stores/configureStore';

const store = configureStore();


window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('app');
  ReactDOM.render(<Provider store={store}><App /></Provider>, container);
});
