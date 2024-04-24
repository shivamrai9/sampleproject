import { Suspense, useState } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import ChatBotForm from './pages/ChatBotForm'
import RegisterForm from './pages/RegisterForm'
import AllRoutes from './Routes/AllRoutes'
import PracticePage from './pages/PracticePage'

function App() {

  return (
    <Suspense fallback="loading...">
      <Navbar />
      <AllRoutes />
{/* <PracticePage /> */}
    </Suspense>
  )
}

export default App
