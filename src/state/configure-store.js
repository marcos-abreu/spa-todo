import initialState from './initial-state';
import { createStore } from 'redux';

import reducers from './reducers';

export default function configureStore(state = initialState) {
  return createStore(reducers, state);
}
