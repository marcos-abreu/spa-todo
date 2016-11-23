import * as types from '../action-types';

export function addTask(description) {
  return function(dispatch, getState) {
    return fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({description: description})
    })
    .then(function(res) {
      return res.json();
    })
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
