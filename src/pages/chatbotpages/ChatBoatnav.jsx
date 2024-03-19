import React from 'react'
import { Link } from 'react-router-dom'

const ChatBoatnav = () => {
    return (
        <>
            <nav className="flex items-center px-12  shadow-lg  sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75">
                <div className="navbar-center mr-10 ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a className='dark:text-white'>Chatbot Title</a></li>
                            <li>
                                <ul className="p-2">
                                    <li><Link to="/analytics">Analytics</Link></li>
                                    <li><Link to="/info">Info</Link></li>
                                    <li><Link to="/conversation">Conversation</Link></li>
                                    <li><Link to="/training-data">Training data</Link></li>
                                    <li><Link to="/integration">Integration</Link></li>
                                    <li><Link to="/snippet">Snippet</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <a className="text-xl">Chatbot Title</a>
                </div>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4 ">
                        <li><Link to="/ChatBot/" className="link link-neutral dark:text-white">Analytics</Link></li>
                        <li><Link to="/ChatBot/info" className="link link-neutral dark:text-white">Info</Link></li>
                        <li><Link to="/ChatBot/conversation" className="link link-neutral dark:text-white">Conversation</Link></li>
                        <li><Link to="/ChatBot/trainingdata" className="link link-neutral dark:text-white">Training data</Link></li>
                        <li><Link to="/ChatBot/integration" className="link link-neutral dark:text-white">Integration</Link></li>
                        <li><Link to="/ChatBot/snippet" className="link link-neutral dark:text-white">Snippet</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default ChatBoatnav
