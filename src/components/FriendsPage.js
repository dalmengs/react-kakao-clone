import React from 'react';
import '../statics/css/FriendsPage.css';

import { useNavigate } from 'react-router-dom';

import friendPickedIcon from '../statics/icon/picked_friend.png';
import chatIcon from '../statics/icon/chat.png';
import moreIcon from '../statics/icon/more.png';

import addFriendIcon from '../statics/icon/add_friend.png';
import searchIcon from '../statics/icon/search.png';

import settingsIcon from '../statics/icon/settings.png';
import notificationIcon from '../statics/icon/notification.png';

import defaultIcon from '../statics/icon/default.png';
import dogIcon from '../statics/icon/dog.png';
import catIcon from '../statics/icon/cat.png';

const myProfile = { id: 1, name: '주형', stateMessage: 'Me', icon: defaultIcon };

const friendsData = [
  { id: 2, name: '범석', stateMessage: 'Hardware', icon: dogIcon },
  { id: 3, name: '한진', stateMessage: 'AI', icon: catIcon },
  { id: 4, name: '병준', stateMessage: 'GOD', icon: defaultIcon },
];

const FriendsPage = () => {

    const navigate = useNavigate();

    const handleGoToChatListPage = () => {
        navigate('/chatlist');
    };
    const handleGoToMyPage = () => {
        navigate('/mypage');
    };

  return (
    <div className="friends-container">
      <div className="sidebar">
        <div className="top-icons">
          <img src={friendPickedIcon} alt="Friend" className="sidebar-icon" />
          <img src={chatIcon} alt="Chats" onClick={handleGoToChatListPage} className="sidebar-icon" />
          <img src={moreIcon} alt="More" onClick={handleGoToMyPage} className="sidebar-icon" />
        </div>
        <div className="bottom-icons">
          <img src={notificationIcon} alt="Notifications" className="sidebar-icon" />
          <img src={settingsIcon} alt="Settings" className="sidebar-icon" />
        </div>
      </div>
      <div className="friends-content">
        <div className="friends-header">
          <div className="friends-title">Friends</div>
          <div className="friends-actions">
            <img src={searchIcon} alt="Search" className="action-icon" />
            <img src={addFriendIcon} alt="Add Friend" className="action-icon" />
          </div>
        </div>
        <div className="my-profile">
          <img className="my-profile-icon" src={myProfile.icon} alt="My Icon" />
          <div className="profile-details">
            <div className="profile-name">{myProfile.name}</div>
            <div className="profile-message">{myProfile.stateMessage}</div>
          </div>
        </div>
        <div className="friends-list-title">Friends {friendsData.length}</div>
        <div className="friends-list">
          {friendsData.map(friend => (
            <div key={friend.id} className="friend-item">
              <img className="profile-icon" src={friend.icon} alt="Friend Icon" />
              <div className="profile-details">
                <div className="profile-name">{friend.name}</div>
                <div className="profile-message">{friend.stateMessage}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendsPage;
