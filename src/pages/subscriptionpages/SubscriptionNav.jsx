import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const SubscriptionNav = () => {
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
                                            <li><Link to="/chatbot/" className="link link-neutral dark:text-white">Analytics</Link></li>
                                            <li><Link to="/chatbot/info" className="link link-neutral dark:text-white">Info</Link></li>
                                            <li><Link to="/chatbot/conversation" className="link link-neutral dark:text-white">Conversation</Link></li>
                                            <li><Link to="/chatbot/trainingdata" className="link link-neutral dark:text-white">Training data</Link></li>
                                            <li><Link to="/chatbot/integration" className="link link-neutral dark:text-white">Integration</Link></li>
                                            <li><Link to="/chatbot/snippet" className="link link-neutral dark:text-white">Snippet</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 space-x-4 ">
                                <li><NavLink to='/subscription' className="link link-neutral dark:text-white">Active Plan</NavLink></li>
                                <li><NavLink to='packagehistory' className="link link-neutral dark:text-white">Package History</NavLink></li>
                                {/* <li><NavLink to='' className="link link-neutral dark:text-white">Order history</NavLink></li> */}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

    </>
  )
}

export default SubscriptionNav
