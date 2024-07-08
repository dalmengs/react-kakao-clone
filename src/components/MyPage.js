import React from 'react';
import '../statics/css/MyPage.css';

import { useNavigate } from 'react-router-dom';

import friendIcon from '../statics/icon/friend.png';
import chatIcon from '../statics/icon/chat.png';
import morePickedIcon from '../statics/icon/picked_more.png';

import settingsIcon from '../statics/icon/settings.png';
import notificationIcon from '../statics/icon/notification.png';

import infoIcon from '../statics/icon/info.png';
import yellowChatIcon from '../statics/icon/yellow_chat.png';

import menuImage from '../statics/img/menu.png';

const myProfile = { name: '이주형', email: 'dalmengs@naver.com' };

const MyPage = () => {

    const navigate = useNavigate();

    const handleGoToChatListPage = () => {
        navigate('/chatlist');
    };

    const handleGoToFriendsPage = () => {
      navigate('/friends');
    };

  return (
    <div className="friends-container">
      <div className="sidebar">
        <div className="top-icons">
          <img src={friendIcon} alt="Friend" onClick={handleGoToFriendsPage} className="sidebar-icon" />
          <img src={chatIcon} alt="Chats" onClick={handleGoToChatListPage} className="sidebar-icon" />
          <img src={morePickedIcon} alt="More" className="sidebar-icon" />
        </div>
        <div className="bottom-icons">
          <img src={notificationIcon} alt="Notifications" className="sidebar-icon" />
          <img src={settingsIcon} alt="Settings" className="sidebar-icon" />
        </div>
      </div>
      <div className="friends-content">
        <div className="friends-header">
          <div className="friends-title">More</div>
        </div>
        <div className="my-profile">
          <div className='my-profile-div'>
          <div className="chat-details">
              <div className="chat-name">{myProfile.name}</div>
              <div className="chat-message">{myProfile.email}</div>
            </div>
            <div className="chat-meta">
              <img className="chat-image" src={yellowChatIcon} alt="Chat Icon" />
            </div>
          </div>
        </div>
        <div className='menu'>
          <img className="menu-image" src={menuImage} alt="Chat Icon" />
        </div>
        <div className="chat-item">
            <img className="chat-icon" src={infoIcon} alt="Chat Icon" />
            <div className="chat-details">
              <div className="chat-name">KakaoTalk Info</div>
            </div>
            <div className="chat-meta">
              <div className="chat-time">ver. 3.5.5</div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default MyPage;
