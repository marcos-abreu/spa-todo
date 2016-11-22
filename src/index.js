import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import UserProfile from './components/user-profile';
import configureStore from './state/configure-store';
const store = configureStore();

render(
  <Provider store={store}>
    <UserProfile />
  </Provider>
, document.getElementById('app'));
