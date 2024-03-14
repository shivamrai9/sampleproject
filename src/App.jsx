import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'

function App() {

  return (
    <>
     <Router>
        <div>
          <Routes>
          {/* <Route exact path='/' element={<Navbar />} /> */}
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
