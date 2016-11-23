import initialState from './initial-state';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

export default function configureStore(state = initialState) {
  return createStore(reducers, state, applyMiddleware(thunk));
}
