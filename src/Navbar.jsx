import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const navigate = useNavigate()

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	const handleLogout = () => {
		localStorage.removeItem("authToken");
		navigate('/login');
	}
	
	return (
		<>
			<nav className="relative px-4 py-4 flex justify-between items-center bg-white">
				<Link className="text-3xl font-bold leading-none text-red-500">
					Sample P
				</Link>
				{/* mobile responsice hamburger menu  */}
				<div className="lg:hidden">
					<button className="navbar-burger flex items-center text-blue-600 p-3" onClick={toggleMenu}>
						<svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<title>Mobile menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
						</svg>
					</button>
				</div>
				<div className='hidden lg:inline-block '>
					{
						(!localStorage.getItem('authToken')) ?
							<>

								<Link className="hidden lg:inline-block lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-200 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" to="/login">Login In</Link>
								<Link className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" to='/signup'>Sign up</Link>
							</> :
							<div className="hidden lg:inline-block py-2 px-6 bg-red-500 hover:bg-red-600 text-sm text-white font-bold rounded-xl transition duration-200"  onClick={handleLogout}>Log Out</div>
					}
				</div>
			</nav>


			<div className={`navbar-menu relative z-50 ${isMenuOpen ? '' : 'hidden'}`}>
				<div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" onClick={closeMenu}></div>
				<nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
					<div className="flex items-center mb-8">
						<Link className="mr-auto text-3xl font-bold leading-none text-red-500" to="/">

							Sample P
						</Link>
						<button className="navbar-close" onClick={closeMenu}    >
							<svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
							</svg>
						</button>
					</div>
					<div>
						<ul>
							<li className="mb-1">
								<Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" to="#">Home</Link>
							</li>
							<li className="mb-1">
								<Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" to="#">About Us</Link>
							</li>
							<li className="mb-1">
								<Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" to="#">Services</Link>
							</li>
							<li className="mb-1">
								<Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" to="#">Pricing</Link>
							</li>
							<li className="mb-1">
								<Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" to="#">Contact</Link>
							</li>
						</ul>
					</div>
					<div className="mt-auto">
						<div className="pt-6">
							<Link className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold  bg-gray-50 hover:bg-gray-100 rounded-xl" to="/login">Sign in</Link>
							<Link className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl" to='/createuser'>Sign Up</Link>
						</div>
						<p className="my-4 text-xs text-center text-gray-400">
							<span>Copyright © shivam</span>
						</p>
					</div>
				</nav>
			</div>
		</>
	)
}
