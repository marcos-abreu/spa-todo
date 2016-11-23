import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Todo from './components/todo';
import configureStore from './state/configure-store';
const store = configureStore();

render(
  <Provider store={store}>
    <Todo />
  </Provider>
, document.getElementById('app'));
