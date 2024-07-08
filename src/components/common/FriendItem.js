import React from 'react';

const FriendItem = ({ friend }) => {
  return (
    <div className="friend-item">
      <img className="profile-icon" src={friend.icon} alt="Friend Icon" />
      <div className="profile-details">
        <div className="profile-name">{friend.name}</div>
        <div className="profile-message">{friend.stateMessage}</div>
      </div>
    </div>
  );
};

export default FriendItem;
