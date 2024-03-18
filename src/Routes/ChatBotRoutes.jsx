import React from 'react'
import { Outlet, Route, Routes  } from "react-router-dom";
import Home from '../pages/Home';
import Analytics from '../pages/chatbotpages/Analytics';
import Info from '../pages/chatbotpages/Info';
import ChatBoatnav from '../pages/chatbotpages/ChatBoatnav';

const ChatBotRoutes = () => {
  return (
    <>
    <ChatBoatnav />
    <Routes>
        <Route path='/' element={<Analytics />} />
        <Route path="/info" element={<Info />} />
    </Routes>
    </>
  )
}

export default ChatBotRoutes
