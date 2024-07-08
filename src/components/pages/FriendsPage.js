import React from 'react';
import '../../statics/css/FriendsPage.css';

import myProfileData from '../../utils/MyProfileAPI';
import friendsData from '../../utils/FriendListAPI';

import MyProfile from '../common/MyProfile';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';
import FriendItem from '../common/FriendItem';

const FriendsPage = () => {
    return (
      <div className="friends-container">
        <Sidebar optionId={0} />
        <div className="friends-content">
          <Header />
          <MyProfile myProfile={myProfileData} />
          <div className="friends-list-title">Friends {friendsData.length}</div>
          <div className="friends-list">
            {friendsData.map(friend => (
              <FriendItem key={friend.id} friend={friend} />
            ))}
          </div>
        </div>
      </div>
    );
};

export default FriendsPage;
