import * as types from '../action-types';
import * as api from '../../lib/api';

export function addTask(description) {
  return function(dispatch, getState) {
    api.addTask(description)
    .then(function(task) {
      return dispatch({
        type: types.ADD_TASK,
        task
      });
    });
  };
}

export function toggleTask(id) {
  return {
    type: types.TOGGLE_TASK,
    id
  };
}

export function deleteTask(id) {
  return function(dispatch, getState) {
    api.removeTask(id)
    .then(function(id) {
      return dispatch({
        type: types.DELETE_TASK,
        id
      });
    });
  };
}

export function fetchTasks() {
  return function(dispatch, getState) {
    return api.fetchTasks()
    .then(function(tasks) {
      return dispatch({
        type: types.FETCH_TASKS,
        tasks
      });
    });
  };
}
