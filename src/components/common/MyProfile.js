import React from 'react';

const MyProfile = ({ myProfile }) => {
  return (
    <div className="my-profile">
      <img className="my-profile-icon" src={myProfile.icon} alt="My Icon" />
      <div className="profile-details">
        <div className="profile-name">{myProfile.name}</div>
        <div className="profile-message">{myProfile.stateMessage}</div>
      </div>
    </div>
  );
};

export default MyProfile;
