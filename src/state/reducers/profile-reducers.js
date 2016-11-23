import * as types from '../action-types';
import initialState from '../initial-state';

export default function reducers(state = initialState.profile, action) {
  switch (action.type) {
    case types.SET_PROFILE_FIELD:
      const newProfile = Object.assign({}, state);
      newProfile[action.key] = action.value;
      return newProfile;

    case types.SAVE_PROFILE:
      return action.profile;

    case types.FETCH_PROFILE:
      return action.profile;

    default:
      return state;
  }
}
