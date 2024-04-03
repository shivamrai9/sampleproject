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
       {/* <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Welcome! Let's create your profile</h1>
        <p className="text-gray-600 mb-6">Let others get to know you better! You can do these later</p>

        <div className="flex items-center mb-6">
          <div className="relative">
            <img
              src="https://via.placeholder.com/150"
              alt="Avatar"
              className="w-20 h-20 rounded-full border-4 border-blue-500"
            />
            <span className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
              Choose image
            </span>
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">Add an avatar</h2>
            <p className="text-gray-600">Or choose one of our defaults</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Add your location</h2>
          <input
            type="text"
            placeholder="San Francisco"
            className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-end">
          <button className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition-colors duration-300">
            Next
          </button>
        </div>
      </div>
    </div> */}
      {/* <Navbar /> */}
      {/* <AllRoutes /> */}
<PracticePage />
    </Suspense>
  )
}

export default App
