import React, { useEffect } from "react";
import { Route, Routes, Outlet,  } from "react-router-dom";
import Home from "../pages/Home";
import ChatBotForm from "../pages/ChatBotForm";
import RegisterForm from "../pages/RegisterForm";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ChatBotRoutes from "./ChatBotRoutes";

const AllRoutes = () => {
  
  return (
    <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="addchatbot" element={<ChatBotForm />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="chatbot/:id/*" element={<ChatBotRoutes />} />
    </Routes>
  );
};



export default AllRoutes;
