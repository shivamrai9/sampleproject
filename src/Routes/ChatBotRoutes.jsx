import React from 'react'
import { Outlet } from "react-router-dom";
import ChatBoatnav from '../pages/chatbotpages/ChatBoatnav';
const ChatBotRoutes = () => {
  return (
    <>
      <ChatBoatnav />
      <Outlet />
    </>
  )
}

export default ChatBotRoutes
