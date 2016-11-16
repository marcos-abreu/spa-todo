import * as types from './action-types';
import initialState from './initial-state';

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TASK:
      return {
        tasks: state.tasks.concat([{ id: state.tasks.length, description: action.description, done: false }])
      }

    default:
      state;
  }
}
