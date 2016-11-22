import React from 'react';

const UserProfile = function() {

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
            type="text" />
        </div>

        <div>
          <label htmlFor="last-name">Last Name</label>
          <input
            id="last-name"
            type="text" />
        </div>

        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="text" />
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text" />
        </div>

        <div>
          <button className="button">Update</button>
        </div>
      </form>
    </div>
  )
};

export default UserProfile;
