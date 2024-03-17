import React, { useState } from 'react'
import cmplogo from '../src/images/brandlogo.svg'
import { Link, useNavigate } from 'react-router-dom';
export const Navbar = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const navigate = useNavigate()

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	// const closeMenu = () => {
	// 	setMenuOpen(false);
	// };

	
	function navLogin() {
		if (!localStorage.getItem('authToken')) 
		{ navigate('/login') }
		
	}
	
	const handleLogout = () => {
		localStorage.removeItem("authToken");
		// navigate('/login');
	}
	return (
		<>
			<nav className="navbar bg-gradient-to-r from-pink-500 to-orange-300  px-5 py-1 text-white shadow  justify-between">
				{/* Left side */}
				<div className="flex-1">
				<Link to='/'>

						<img src={cmplogo} alt="Logo" className="hidden md:block w-auto  h-14" />
				</Link>
					<ul className="ml-4 space-x-4 hidden lg:flex">
						<li className='btn btn-sm btn-ghost'>Chatbot</li>
						<li className='btn btn-sm btn-ghost'>Account</li>
						<li className='btn btn-sm btn-ghost'>Subscription</li>
					</ul>
					<label className="btn btn-circle swap swap-rotate md:hidden">
						<input type="checkbox" />
						<svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
						<svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
					</label>
				</div>

				{/* Right side */}
				<div className="flex-none gap-2" >
					<div className="dropdown dropdown-end" onClick={navLogin}>
						<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar overflow-hidden flex justify-center items-center">
							{(localStorage.getItem('authToken')) ? <div className="bg-pink-400 w-full h-full flex justify-center items-center">
								<div className="w-full h-full flex items-center justify-center"><span className="font-bold text-lg uppercase" >shivam</span></div>
							</div> : <svg  width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="9" r="3" stroke="#1C274C" strokeWidth="1.5"></circle> <path d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>}

						</div>
						{(localStorage.getItem('authToken')) ?
							<>
							<ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
								<li className='text-slate-950' onClick={handleLogout}><a>Logout</a></li>
							</ul>
							</>
							: ""
						}
					</div>
				</div>
			</nav>
		</>
	)
}
