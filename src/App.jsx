import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import ChatBotForm from './pages/ChatBotForm'
import RegisterForm from './pages/RegisterForm'

function App() {

  return (
    <>
     <Router>
    <Navbar />
          <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/addchatbot/:id' element={<ChatBotForm />} />
          <Route exact path='/register' element={<RegisterForm />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
