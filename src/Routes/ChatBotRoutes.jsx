import React from 'react'
import { Outlet, Route, Routes  } from "react-router-dom";
import Home from '../pages/Home';
import Analytics from '../pages/chatbotpages/Analytics';
import Info from '../pages/chatbotpages/Info';
import ChatBoatnav from '../pages/chatbotpages/ChatBoatnav';
import TraningData from '../pages/chatbotpages/TraningData';
import Conversation from '../pages/chatbotpages/Conversation';

const ChatBotRoutes = () => {
  return (
    <>
    <ChatBoatnav />
    <Routes>
        <Route path='/' element={<Analytics />} />
        <Route path="/info" element={<Info />} />
        <Route path="/trainingdata" element={<TraningData />} />
        <Route path="/conversation" element={<Conversation />} />
    </Routes>
    </>
  )
}

export default ChatBotRoutes
