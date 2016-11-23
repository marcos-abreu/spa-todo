import * as types from '../action-types';

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

export function fetchTasks() {
  return function(dispatch, getState) {
    fetch('http://localhost:3000/todos')
    .then(function(res) {
      return res.json();
    })
    .then(function(tasks) {
      return dispatch({
        type: types.FETCH_TASKS,
        tasks
      });
    });
  };
}
