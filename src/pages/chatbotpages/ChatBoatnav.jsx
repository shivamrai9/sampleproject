import React from 'react'

const ChatBoatnav = () => {
    return (
        <>
            <div className="flex items-center bg-base-100 px-12 sticky top-0 shadow-lg ">
                <div className="navbar-center mr-10">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Chatbot Title</a></li>
                            <li>
                                <ul className="p-2">
                                    <li><a>Analytics</a></li>
                                    <li><a>Info</a></li>
                                    <li><a>Conversation</a></li>
                                    <li><a>Training data</a></li>
                                    <li><a>Integration</a></li>
                                    <li><a>Snippet</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <a className="text-xl">Chatbot Title</a>
                </div>
                <div className="navbar-start hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4 ">
                        <li><a className="link link-neutral">Analytics</a></li>
                        <li><a className="link link-neutral">info</a></li>
                        <li><a className="link link-neutral">Conversation</a></li>
                        <li><a className="link link-neutral">Training data</a></li>
                        <li><a className="link link-neutral">Integration</a></li>
                        <li><a className="link link-neutral">Snippet</a></li>
                        <li>
                            {/* <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                <li><a className="link link-neutral">info</a></li>
                                <li><a className="link link-neutral">Conversation</a></li>
                                <li><a className="link link-neutral">Training data</a></li>
                                <li><a className="link link-neutral">Integration</a></li>
                                <li><a className="link link-neutral">Snippet</a></li>
                                </ul>
                            </details> */}
                        </li>
                    </ul>
                </div>
            </div>
            {/* <nav className="bg-white shadow-lg sticky top-0 w-full z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="navbar-center">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Chatbot Title</a></li>
                                    <li>
                                        <ul className="p-2">
                                            <li><a>Analytics</a></li>
                                            <li><a>Info</a></li>
                                            <li><a>Conversation</a></li>
                                            <li><a>Training data</a></li>
                                            <li><a>Integration</a></li>
                                            <li><a>Snippet</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <a className="text-xl">Chatbot Title</a>
                        </div>
                        <div className="navbar-start hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                <li><a className="link link-neutral">Analytics</a></li>
                                <li><a className="link link-neutral">info</a></li>
                                <li><a className="link link-neutral">Conversation</a></li>
                                <li><a className="link link-neutral">Training data</a></li>
                                <li><a className="link link-neutral">Integration</a></li>
                                <li><a className="link link-neutral">Snippet</a></li>
                                <li>
                                </li>
                            </ul>
                        </div>
                </div>
            </nav> */}
        </>
    )
}

export default ChatBoatnav
