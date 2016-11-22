import * as types from './action-types';

export function addTask(description) {
  return {
    type: types.ADD_TASK,
    description
  };
}

export function toggleTask(id) {
  return {
    type: types.TOGGLE_TASK,
    id
  };
}

export function deleteTask(id) {
  return {
    type: types.DELETE_TASK,
    id
  };
}

export function setProfileField(options) {
  const { key, value } = options;
  return {
    type: types.SET_PROFILE_FIELD,
    key,
    value
  };
}
