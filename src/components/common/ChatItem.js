import React from 'react';

const ChatItem = ({ chat }) => {
  return (
    <div className="chat-item">
      <img className="chat-icon" src={chat.icon} alt="Chat Icon" />
      <div className="chat-details">
        <div className="chat-name">{chat.name}</div>
        <div className="chat-message">{chat.lastMessage}</div>
      </div>
      <div className="chat-meta">
        <div className="chat-time">{chat.time}</div>
        {chat.unreadCount > 0 && (
          <div className="chat-unread">{chat.unreadCount}</div>
        )}
      </div>
    </div>
  );
};

export default ChatItem;
