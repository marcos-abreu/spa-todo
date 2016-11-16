import * as types from './action-types';

export function addTask(description) {
  return {
    type: types.ADD_TASK,
    description
  }
}

export function toggleTask(id) {
  return {
    type: types.TOGGLE_TASK,
    id
  }
}
