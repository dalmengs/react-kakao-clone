import React from 'react';
import '../statics/css/ChatList.css';

import { useNavigate } from 'react-router-dom';

import friendIcon from '../statics/icon/friend.png';
import chatPickedIcon from '../statics/icon/picked_chat.png';
import moreIcon from '../statics/icon/more.png';

import addChatIcon from '../statics/icon/add_chat.png';
import searchIcon from '../statics/icon/search.png';

import settingsIcon from '../statics/icon/settings.png';
import notificationIcon from '../statics/icon/notification.png';

import defaultIcon from '../statics/icon/default.png';
import dogIcon from '../statics/icon/dog.png';
import catIcon from '../statics/icon/cat.png';

const testData = [
  { id: 2, name: '범석', lastMessage: 'How are you?', time: 'Yesterday', unreadCount: 1, icon: dogIcon },
  { id: 3, name: '한진', lastMessage: 'Meeting at 5?', time: '2:53 PM', unreadCount: 0, icon: catIcon },
  { id: 4, name: '병준', lastMessage: 'Let\'s go!', time: '3:00 PM', unreadCount: 5, icon: defaultIcon },
];

const ChatList = () => {

    const navigate = useNavigate();

    const handleGoToFriendsPage = () => {
        navigate('/friends');
    };

    const handleGoToMyPage = () => {
        navigate('/mypage');
    };


  return (
    <div className="chat-container">
      <div className="sidebar">
        <div className="top-icons">
          <img src={friendIcon} alt="Friend" onClick={handleGoToFriendsPage} className="sidebar-icon" />
          <img src={chatPickedIcon} alt="Chats" className="sidebar-icon" />
          <img src={moreIcon} alt="More" onClick={handleGoToMyPage} className="sidebar-icon" />
        </div>
        <div className="bottom-icons">
          <img src={notificationIcon} alt="Notifications" className="sidebar-icon" />
          <img src={settingsIcon} alt="Settings" className="sidebar-icon" />
        </div>
      </div>
      <div className="chat-content">
        <div className="chat-header">
          <div className="chat-title">Chats ▾</div>
          <div className="chat-actions">
            <img src={searchIcon} alt="Search" className="action-icon" />
            <img src={addChatIcon} alt="Add Chat" className="action-icon" />
          </div>
        </div>
        <div className="chat-list">
            {testData.map(chat => (
            <div key={chat.id} className="chat-item">
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatList;
