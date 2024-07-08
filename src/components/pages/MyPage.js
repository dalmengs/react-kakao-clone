import React from 'react';
import '../../statics/css/MyPage.css';

import Sidebar from '../layout/Sidebar';
import MyProfileHeader from '../layout/MyProfileHeader'
import Menu from '../common/Menu';

import myProfileData from '../../utils/MyProfileAPI';

const MyPage = () => {
  return (
    <div className="friends-container">
      <Sidebar optionId={2} />
      <div className="friends-content">
        <div className="friends-header">
          <div className="friends-title">More</div>
        </div>
        <MyProfileHeader name={myProfileData.name} email={myProfileData.email} />
        <Menu />
      </div>
    </div>
  );
};

export default MyPage;
