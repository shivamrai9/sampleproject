import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const ChatBoatnav = ({id}) => {
    console.log(id)
    return (
        <>
            <div className='sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent'>
                <div className='max-w-7xl mx-auto'>
                    <nav className="flex items-center ">
                        <div className="navbar-center mr-10 ">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a className='dark:text-white'>Chatbot Title</a></li>
                                    <li>
                                        <ul className="p-2">
                                            <li><NavLink to="/chatbot" className="link link-neutral dark:text-white">Analytics</NavLink></li>
                                            <li><NavLink to="/chatbot/info" className="link link-neutral dark:text-white">Info</NavLink></li>
                                            <li><NavLink to="/chatbot/conversation" className="link link-neutral dark:text-white">Conversation</NavLink></li>
                                            <li><NavLink to="/chatbot/trainingdata" className="link link-neutral dark:text-white">Training data</NavLink></li>
                                            <li><NavLink to="/chatbot/integration" className="link link-neutral dark:text-white">Integration</NavLink></li>
                                            <li><NavLink to="/chatbot/snippet" className="link link-neutral dark:text-white">Snippet</NavLink></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <a className="text-xl">Chatbot Title</a>
                        </div>
                        <div className="hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 space-x-4 ">
                                <li className='link link-neutral dark:text-white"'><NavLink to="analytics">Analytics</NavLink></li>
                                <li className='link link-neutral dark:text-white"'><NavLink to="info">Info</NavLink></li>
                                <li className='link link-neutral dark:text-white"'><NavLink to="conversation">Conversation</NavLink></li>
                                <li className='link link-neutral dark:text-white"'><NavLink to="trainingdata">Training data</NavLink></li>
                                <li className='link link-neutral dark:text-white"'><NavLink to="integration">Integration</NavLink></li>
                                <li className='link link-neutral dark:text-white"'><NavLink to="snippet">Snippet</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
 {/* <nav className="bg-gray-700 p-2 ">
      <ul className="flex space-x-4">
        <li>
          <NavLink
            to="analytics"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-white"
            }
          >
            Analytics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="info"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-white"
            }
          >
            Info
          </NavLink>
        </li>
        <li>
          <NavLink
            to="conversation"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-white"
            }
          >
            Conversation
          </NavLink>
        </li>
      </ul>
    </nav> */}

        </>
    )
}

export default ChatBoatnav
