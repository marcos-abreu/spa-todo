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
  return {
    type: types.SAVE_PROFILE,
    // profile
  };
}
