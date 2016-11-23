import { combineReducers } from 'redux';

import profileReducers from './profile-reducers';
import taskReducers from './task-reducers';

export default combineReducers({
  profile: profileReducers,
  tasks: taskReducers
});
