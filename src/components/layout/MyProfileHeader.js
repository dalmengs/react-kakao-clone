import React from 'react';
import yellowChatIcon from '../../statics/icons/yellow_chat.png';

const MyProfile = ({ name, email }) => {
  return (
    <div className="my-profile">
      <div className="my-profile-div">
        <div className="chat-meta">
          <img className="chat-image" src={yellowChatIcon} alt="Chat Icon" />
        </div>
        <div className="chat-details">
          <div className="chat-name">{name}</div>
          <div className="chat-message">{email}</div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
