import React from 'react';
import { useNavigate } from 'react-router-dom';

import friendIcon from '../../statics/icons/friend.png';
import chatIcon from '../../statics/icons/chat.png';
import moreIcon from '../../statics/icons/more.png'

import settingsIcon from '../../statics/icons/settings.png';
import notificationIcon from '../../statics/icons/notification.png';

import friendPickedIcon from '../../statics/icons/picked_friend.png';
import chatPickedIcon from '../../statics/icons/picked_chat.png';
import morePickedIcon from '../../statics/icons/picked_more.png';

const Sidebar = ({ optionId }) => {
    const navigate = useNavigate();
  
    const handleFriendsClick = () => {
      navigate('/friends');
    };
  
    const handleChatListClick = () => {
      navigate('/chatlist');
    };

    const handleMyPageClick = () => {
        navigate('/mypage');
      };
  
    const handleSignInClick = () => {
      navigate('/');
    };

    const handleTodoClick = () => {
        navigate('/todo');
      };
  
    let friendImage = friendIcon;
    let chatImage = chatIcon;
    let moreImage = moreIcon;
  
    if (optionId === 0) {
      friendImage = friendPickedIcon;
    } else if (optionId === 1) {
      chatImage = chatPickedIcon;
    } else if (optionId === 2) {
      moreImage = morePickedIcon;
    }
  
    return (
      <div className="sidebar">
        <div className="top-icons">
          <img src={friendImage} alt="Friend" onClick={handleFriendsClick} className="sidebar-icon" />
          <img src={chatImage} alt="Chats" onClick={handleChatListClick} className="sidebar-icon" />
          <img src={moreImage} alt="More" onClick={handleMyPageClick} className="sidebar-icon" />
        </div>
        <div className="bottom-icons">
          <img src={notificationIcon} alt="Notifications" onClick={handleTodoClick} className="sidebar-icon" />
          <img src={settingsIcon} alt="Settings" onClick={handleSignInClick} className="sidebar-icon" />
        </div>
      </div>
    );
  };

export default Sidebar;