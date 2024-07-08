import React from 'react';
import '../../statics/css/ChatList.css';

import Sidebar from '../layout/Sidebar';
import ChatItem from '../common/ChatItem';
import Header from '../layout/Header';

import testData from '../../utils/ChatListAPI'

const ChatList = () => {
  return (
    <div className="chat-container">
      <Sidebar optionId={1} />
      <div className="chat-content">
        <Header />
        <div className="chat-list">
          {testData.map(chat => (
            <ChatItem key={chat.id} chat={chat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatList;
