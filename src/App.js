import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Friends from './routes/Friends';
import Profile from './routes/Profile';
import Chats from './routes/Chats';
import Chatting from './routes/Chatting';
import Find from './routes/Find';
import More from './routes/More';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Friends />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/chatting" element={<Chatting />} />
        <Route path="/find" element={<Find />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;