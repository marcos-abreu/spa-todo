import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../state/actions';
import LabelInput from './label-input';

const UserProfile = function(props) {

  return (
    <div id="profile-page">
      <header className="row column">
        <h2>User Profile</h2>
      </header>

      <form className="row column">
        <LabelInput id="first-name" label="First Name" update={props.updateProfile} value={props.profile['first-name']} />
        <LabelInput id="last-name" label="Last Name" update={props.updateProfile} value={props.profile['last-name']} />
        <LabelInput id="phone" label="Phone Number" update={props.updateProfile} value={props.profile.phone} />
        <LabelInput id="address" label="Address" update={props.updateProfile} value={props.profile.address} />
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
