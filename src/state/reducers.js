import * as types from './action-types';
import initialState from './initial-state';

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_TASK:
      return {
        tasks: state.tasks.map(function(task) {
          if (task.id !== action.id) {
            return task;
          }
          else {
            // return { id: task.id, description: task.description, done: !task.done };
            return Object.assign({}, task, { done: !task.done });
          }
        })
      }

    case types.ADD_TASK:
      return {
        tasks: state.tasks.concat([{ id: state.tasks.length, description: action.description, done: false }])
      }

    default:
      return state;
  }
}
