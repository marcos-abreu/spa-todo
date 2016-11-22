import * as types from '../action-types';
import initialState from '../initial-state';

export default function reducers(state = initialState.tasks, action) {
  switch (action.type) {
    case types.DELETE_TASK:
      return state.filter(function(task) {
        return task.id !== action.id;
      });

    case types.TOGGLE_TASK:
      return state.map(function(task) {
        if (task.id !== action.id) {
          return task;
        }
        else {
          // return { id: task.id, description: task.description, done: !task.done };
          return Object.assign({}, task, { done: !task.done });
        }
      });

    case types.ADD_TASK:
      return state.concat([{
        id: state.length,
        description: action.description,
        done: false
      }]);

    default:
      return state;
  }
}
