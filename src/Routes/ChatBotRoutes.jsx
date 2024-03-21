import React from 'react'
import { Outlet, Route, Routes, useParams } from "react-router-dom";
import Home from '../pages/Home';
import Analytics from '../pages/chatbotpages/Analytics';
import Info from '../pages/chatbotpages/Info';
import ChatBoatnav from '../pages/chatbotpages/ChatBoatnav';
import TraningData from '../pages/chatbotpages/TraningData';
import Conversation from '../pages/chatbotpages/Conversation';

const ChatBotRoutes = () => {
  let { id } = useParams();
  console.log(id)

  return (
    <>
      <ChatBoatnav id={id}/>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Analytics/>} />
          <Route path="/info" element={<Info/>} />
          <Route path="/conversation" element={<Conversation/>} />
          <Route path="/trainingdata" element={<TraningData/>} />
        </Route>
      </Routes>
    </>
  )
}

export default ChatBotRoutes
