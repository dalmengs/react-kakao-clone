import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import FriendsPage from './components/FriendsPage';
import ChatListPage from './components/ChatList';
import MyPage from './components/MyPage'
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/chatlist" element={<ChatListPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </Router>
  );
};

export default App;
