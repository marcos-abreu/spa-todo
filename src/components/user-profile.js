import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../state/actions/profile-actions';
import LabelInput from './label-input';

var fields = [
  { id: 'first-name', label: 'First Name' },
  { id: 'last-name', label: 'Last Name'},
  { id: 'phone', label: 'Phone Number'},
  { id: 'address', label: 'Address' }
];

class UserProfile extends Component {
  componentDidMount() {
    this.props.fetchProfile();
  }

  handleClick = e => {
    e.stopPropagation();
    e.preventDefault();

    this.props.saveProfile();
  }

  render() {
    const inputList = fields.map(details => {
      return <LabelInput {...details}
                key={details.id}
                onChange={this.props.setProfileField}
                value={this.props.profile[details.id]} />;
    });

    return (
      <div id="profile-page">
        <form className="row column">
          {inputList}
          <div>
            <button onClick={this.handleClick} className="button">Update</button>
          </div>
        </form>
      </div>
    );
  }
}

const stateToProps = function(state) {
  return {
    profile: state.profile
  };
};

const actionsToProps = function(dispatch) {
  return {
    setProfileField: function(key, value) {
      return dispatch(actions.setProfileField({key, value}));
    },
    saveProfile: function() {
      return dispatch(actions.saveProfile());
    },
    fetchProfile: function() {
      return dispatch(actions.fetchProfile());
    }
  };
};

export default connect(stateToProps, actionsToProps)(UserProfile)
