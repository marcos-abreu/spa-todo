import * as types from '../action-types';

export function setProfileField(options) {
  const { key, value } = options;

  return {
    type: types.SET_PROFILE_FIELD,
    key,
    value
  };
}

export function saveProfile() {
  return function(dispatch, getState) {
    const state = getState();

    return fetch('http://localhost:3000/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state.profile)
    })
    .then(function(res) {
      return res.json();
    })
    .then(function(profile) {
      return dispatch({
        type: types.SAVE_PROFILE,
        profile
      });
    });
  };
}
