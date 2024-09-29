import { Suspense, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import ChatBotForm from './pages/ChatBotForm'
import MainLayout from './Routes/MainLayout'
import ChatBotRoutes from './Routes/ChatBotRoutes'
import Analytics from './pages/chatbotpages/Analytics'
import Info from './pages/chatbotpages/Info'
import Conversation from './pages/chatbotpages/Conversation'
import TraningData from './pages/chatbotpages/TraningData'
import Account from './pages/account/Account'
import BasicInfo from './pages/account/BasicInfo'
import Payment from './pages/account/Payment'
import SubscriptionRoutes from './Routes/SubscriptionRoutes'
import ActivePlan from './pages/subscriptionpages/ActivePlan'
import Packagehistoryistory from './pages/subscriptionpages/Packagehistory'
import ScrollToTop from './componants/ScrollToTop'
import { Navbar } from './Navbar'
function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addchatbot" element={<ChatBotForm />} />
        <Route path="/chatbot/*" element={<ChatBotRoutes />}
        >
          <Route path="analytics" element={<Analytics />} />
          <Route path="info" element={<Info />} />
          <Route path="conversation" element={<Conversation />} />
          <Route path="trainingdata" element={<TraningData />} />
        </Route>
        <Route path="/account/*" element={<Account />} >
          <Route path='basicinfo' element={<BasicInfo />} />
          <Route path="payment" element={<Payment />} />
        </Route>
        <Route path="/subscription/*" element={<SubscriptionRoutes />} >
          <Route path='activeplan' element={<ActivePlan />} />
          <Route path="packagehistory" element={<Packagehistoryistory />} />
        </Route>
      </Routes>
      {/* <Routes>
        <Route path='/' element={<MainLayout />} >
        <Route index element={<Home />} />
        <Route path="addchatbot" element={<ChatBotForm />} />
        </Route>
        <Route path="chatbot/*" element={<ChatBotRoutes />}>
          <Route index element={<Analytics />} />
          <Route path="info" element={<Info />} />
          <Route path="conversation" element={<Conversation />} />
        </Route>
      </Routes> */}
      {/* <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="addchatbot" element={<ChatBotForm />} />
          <Route path="chatbot/*" element={<ChatBotRoutes />}>
            <Route path='analytics' element={<Analytics />} />
            <Route path="info" element={<Info />} />
            <Route path="conversation" element={<Conversation />} />
            <Route path="trainingdata" element={<TraningData />} />
          </Route>
          <Route path="account/*" element={<Account />} >
            <Route index element={<BasicInfo />} />
            <Route path="payment" element={<Payment />} />
          </Route>
          <Route path="subscription/*" element={<SubscriptionRoutes />} >
            <Route index element={<ActivePlan />} />
            <Route path="packagehistory" element={<Packagehistoryistory />} />
          </Route>
        </Route>

      </Routes> */}
    </BrowserRouter>
  )
}

export default App


