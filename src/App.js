import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from './components/pages/LoginPage';
import FriendsPage from './components/pages/FriendsPage';
import ChatListPage from './components/pages/ChatList';
import MyPage from './components/pages/MyPage'
import TodoPage from './components/pages/TodoPage'

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/chatlist" element={<ChatListPage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
