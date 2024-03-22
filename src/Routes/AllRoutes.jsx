import React, { useEffect } from "react";
import { Route, Routes, } from "react-router-dom";
import Home from "../pages/Home";
import ChatBotForm from "../pages/ChatBotForm";
import RegisterForm from "../pages/RegisterForm";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ChatBotRoutes from "./ChatBotRoutes";
import SubscriptionRoutes from "./SubscriptionRoutes";
import Analytics from "../pages/chatbotpages/Analytics";
import TraningData from "../pages/chatbotpages/TraningData";
import Conversation from "../pages/chatbotpages/Conversation";
import Info from "../pages/chatbotpages/Info";
import ActivePlan from "../pages/subscriptionpages/ActivePlan";
import Account from "../pages/account/Account";
import BasicInfo from "../pages/account/BasicInfo";
import Payment from "../pages/account/Payment";

const AllRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addchatbot" element={<ChatBotForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/chatbot" element={<ChatBotRoutes />} >
        <Route path="analytics" element={<Analytics />} />
        <Route path="info" element={<Info />} />
        <Route path="conversation" element={<Conversation />} />
        <Route path="trainingdata" element={<TraningData />} />
      </Route>
      <Route  path="/account" element={<Account />}>
        <Route path='basicinfo' element={<BasicInfo />}/>
        <Route path="payment" element={<Payment />} />
      </Route>
      <Route path="/subscription" element={<SubscriptionRoutes />} >
        <Route path="activeplan" element={<ActivePlan />} />
        
      </Route>
    </Routes>
  );
};



export default AllRoutes;
