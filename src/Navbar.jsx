import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import cmplogo from '../src/images/brandlogo.svg'
export const Navbar = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);
	// const navigate = useNavigate()

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
			{/* <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
				<Link className="text-3xl font-bold leading-none text-red-500">
					Sample P
				</Link>
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
			</div> */}
			{/* <div className="navbar bg-[#f4f4f4] fixed top-0 z-50 shadow md:px-20">
				<div className="flex-1">
					<a className="hidden btn btn-ghost text-xl md:flex">Blog</a>
					<div className="btn w-10 h-10 p-1 md:hidden">
						<label className="btn btn-circle swap swap-rotate">
							<input type="checkbox" />
							<svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

							<svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

						</label>
					</div>
				</div>
				<div className="flex-none gap-2">
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal px-1">
							<li><a>Item 1</a></li>
							<li>
								<details>
									<summary>Parent</summary>
									<ul className="p-2">
										<li><a>Submenu 1</a></li>
										<li><a>Submenu 2</a></li>
									</ul>
								</details>
							</li>
							<li><a>Item 3</a></li>
						</ul>
					</div>
					<div className="form-control">
						<input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" />
					</div>
					<div className="dropdown dropdown-end" >
						<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar overflow-hidden flex justify-center items-center">
							<div className="bg-pink-400 w-full h-full flex justify-center items-center">
                <div className="w-full h-full flex items-center justify-center"><span className="font-bold text-lg uppercase">{name && name[0]}</span></div>
              </div> 
							<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="9" r="3" stroke="#1C274C" strokeWidth="1.5"></circle> <path d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
						</div>
						<ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
							<li>
								<a className="justify-between">
									Profile
									<span className="badge bg-neutral text-white">New</span>
								</a>
							</li>
							<li><a>Settings</a></li>
							<li><a>Logout</a></li>
							<li><a>Delete Account</a></li>
						</ul>
					</div>
				</div>
			</div> */}
			<div className="navbar bg-gradient-to-r from-pink-500 to-orange-300 fixed top-0 z-50 text-white shadow md:px-12 ">
				<div className="navbar-center">
					{/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
					<div className="avatar me-10">
						<div className="w-72 h-14 rounded">
							<img src={cmplogo} />
						</div>
					</div>
					<ul className="menu menu-horizontal px-1">
						<li className='btn btn-sm btn-ghost'>Chatbot</li>
						<li className='btn btn-sm btn-ghost'>Account</li>
						<li className='btn btn-sm btn-ghost'>Subscription</li>
					</ul>
				</div>
			</div>
		</>
	)
}
