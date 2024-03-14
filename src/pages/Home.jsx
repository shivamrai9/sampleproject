import React from 'react'
import { Navbar } from '../Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-dvh bg-gray-100 ">
      <header className="flex justify-end items-center py-4 px-8 pt-24">
          <button className="btn btn-sm px-12  bg-black hover:bg-slate-900 text-white rounded-full">
            Add Chatbot
          </button>
        </header>
        <main className="flex flex-col sm:flex-row  justify-center items-center p-5 md:space-x-14 ">
          <div className="flex flex-col justify-center items-center bg-white shadow-md rounded-3xl p-16">
            <h3 className="text-xl font-bold text-gray-800">Chatbot 1</h3>
            <p className="text-gray-600">Description about Chatbot 1</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white shadow-md rounded-3xl p-16">
            <h3 className="text-xl font-bold text-gray-800">Chatbot 2</h3>
            <p className="text-gray-600">Description about Chatbot 2</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white shadow-md rounded-3xl p-16">
            <h3 className="text-xl font-bold text-gray-800">Chatbot 3</h3>
            <p className="text-gray-600">Description about Chatbot 3</p>
          </div>
        </main>
        
      </div>
    </>
  )
}

export default Home
