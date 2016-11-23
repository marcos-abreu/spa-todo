import * as types from '../action-types';
import * as api from '../../lib/api';

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

    api.saveProfile(state.profile)
    .then(function(profile) {
      return dispatch({
        type: types.SAVE_PROFILE,
        profile
      });
    });
  };
}

export function fetchProfile() {
  return function(dispatch, getState) {
    api.fetchProfile()
    .then(function(profile) {
      return dispatch({
        type: types.FETCH_PROFILE,
        profile
      });
    });
  };
}
