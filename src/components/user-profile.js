import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../state/actions';

const UserProfile = function(props) {

  return (
    <div id="profile-page">
      <header className="row column">
        <h2>User Profile</h2>
      </header>

      <form className="row column">
        <div>
          <label htmlFor="first-name">First Name</label>
          <input
            id="first-name"
            type="text"
            value={props.profile['first-name']}
            onChange={e => props.updateProfile('first-name', e.target.value)} />
        </div>

        <div>
          <label htmlFor="last-name">Last Name</label>
          <input
            id="last-name"
            type="text"
            value={props.profile['last-name']}
            onChange={e => props.updateProfile('last-name', e.target.value)} />
        </div>

        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="text"
            value={props.profile.phone}
            onChange={e => props.updateProfile('phone', e.target.value)} />
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            value={props.profile.address}
            onChange={e => props.updateProfile('address', e.target.value)} />
        </div>

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
