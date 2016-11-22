import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../state/actions';
import LabelInput from './label-input';

var fields = [
  { id: 'first-name', label: 'First Name' },
  { id: 'last-name', label: 'Last Name'},
  { id: 'phone', label: 'Phone Number'},
  { id: 'address', label: 'Address' }
];

const UserProfile = function(props) {
  const inputList = fields.map(details => {
    return <LabelInput {...details}
              key={details.id}
              onChange={props.updateProfile}
              value={props.profile[details.id]} />;
  });

  return (
    <div id="profile-page">
      <header className="row column">
        <h2>User Profile</h2>
      </header>

      <form className="row column">
        {inputList}
        <div>
          <button className="button">Update</button>
        </div>
      </form>
    </div>
  )
};

const stateToProps = function(state) {
  return {
    profile: state.profile
  };
};

const actionsToProps = function(dispatch) {
  return {
    updateProfile: function(key, value) {
      return dispatch(actions.updateProfile({key, value}));
    }
  };
};

export default connect(stateToProps, actionsToProps)(UserProfile)
