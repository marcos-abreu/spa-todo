import initialState from './initial-state';
import { createStore } from 'redux';

import reducers from './reducers';

export default function configureStore(state = initialState) {
  if (process.env.NODE_ENV === 'development') {
    return createStore(reducers, state,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  }
  else {
    return createStore(reducers, state);
  }
}
