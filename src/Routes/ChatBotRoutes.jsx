import React from 'react'
import { Outlet } from "react-router-dom";
import ChatBoatnav from '../pages/chatbotpages/ChatBoatnav';
import SubNav from '../componants/SubNav';
const ChatBotRoutes = () => {

  const chatbotLinks = [
    { name: "Analytics", path: "analytics" },
    { name: "Info", path: "info" },
    { name: "conversation", path: "conversation" },
    { name: "Training data", path: "trainingdata" },
    { name: "Integration", path: "integration" },
    { name: "Snippet", path: "snippet" },
  ];

  
  return (
    <>
    {/* <div className=' mx-auto  '> */}
      {/* <ChatBoatnav /> */}
      {/* <SubNav links={chatbotLinks} baseRoute="/chatbot" />
        <Outlet />
    </div> */}
      {/* <div className="overflow-y-scroll"> */}
      {/* </div> */}
      <div className="min-h-screen flex flex-col ">
      {/* Sticky Nav */}
      <SubNav links={chatbotLinks} baseRoute="/chatbot" tittle='Chatbot Title'/>
      
      {/* Main Content with Outlet */}
      <div className="overflow-y-auto">
        <Outlet />
      </div>
    </div>
    </>
  )
}

export default ChatBotRoutes
