import React from 'react';
import addChatIcon from '../../statics/icons/add_chat.png';
import searchIcon from '../../statics/icons/search.png';

const ChatHeader = ({ icon }) => {
  return (
    <div className="chat-header">
      <div className="chat-title">Chats ▾</div>
      <div className="chat-actions">
        <img src={searchIcon} alt="Search" className="action-icon" />
        <img src={ icon ? icon : addChatIcon } alt="Add Chat" className="action-icon" />
      </div>
    </div>
  );
};

export default ChatHeader;
