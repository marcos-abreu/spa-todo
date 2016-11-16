import * as types from './action-types';

export function addTask(description) {
  return {
    type: types.ADD_TASK,
    description
  }
}
