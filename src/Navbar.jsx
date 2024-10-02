import React, { useState } from 'react'
import cmplogo from '../src/images/brandlogo.svg'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaCaretDown } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa'
import { FaUserCircle } from "react-icons/fa";
import SearchModal from './componants/SearchModal';
import MobileSidebar from './componants/MobileSidebar';
import { useQuery, gql } from '@apollo/client';


const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export const Navbar = () => {
	const { loading, error, data } = useQuery(GET_LOCATIONS);


	const [isMenuOpen, setMenuOpen] = useState(false);
	const navigate = useNavigate()

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	function navLogin() {
		if (!localStorage.getItem('authToken')) { navigate('/login') }

	}

	const handleLogout = () => {
		localStorage.removeItem("authToken");
		navigate('/login');
	}


	const navLinks = [
		{ name: "Chatbot", path: "chatbot/analytics" },
		{ name: "Account", path: "/account" },
		{ name: "Subscription", path: "/subscription" },
	];

	// Function to render NavLink classes conditionally
	const navigationActive = ({ isActive }) => {
		return isActive ? "border-b-2 text-white" : "text-white select-none";
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;

	return (
		<>




			<header className="w-full flex-shrink-0  backdrop-blur dark:bg-rtlDark bg-gradient-to-r from-pink-500 to-orange-300  border-b border-b-accentNeon/20 flex items-center justify-between p-1 px-2">
				<div className=" flex items-center text-base  gap-1">
					{/* <div className='md:hidden'>
						<MobileSidebar />
					</div> */}

					<Link
						to="/"
						className="select-none hover:opacity-80 z-50 top-1 flex items-center text-base  gap-1  p-[2px] rounded-r-full px-4"
					>
						<img src={cmplogo} alt="" height={500} width={500} className="w-36 select-none " />

					</Link>


					<ul className="md:flex space-x-4 ms-12 hidden">
						{/* Dynamic rendering of navLinks */}
						{navLinks.map((link) => (
							<li key={link.name}>
								<NavLink to={link.path} className={navigationActive} >
									{link.name}
								</NavLink>
							</li>
						))}
					</ul>
				</div>

				<div className="flex-none">
					<ul className="menu menu-horizontal px-1 flex items-center text-white">
						{(localStorage.getItem('authToken')) ?
							<li>
								<div className="dropdown py-[1px] px-2" tabIndex="1">
									<div className="flex justify-center items-center">

										<div className="avatar online placeholder">
											<div className="bg-neutral-focus text-neutral-content rounded-full">
												<div className="w-12 rounded-full">
													<img
														src="https://lh3.googleusercontent.com/a/ACg8ocJQgh2bjFHx44Jl95LofUQ3arEB_ceySJEJ58Z1to0MKlHVfknI=s96-c"
														alt="User"
													/>
												</div>
											</div>
										</div>
										<span className="ml-1">
										<FaCaretDown className='text-xl'/>
										</span>
									</div>
									<ul
										tabIndex="0"
										className="dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-52 top-[120%] right-[2%] darkSyllabusDropdown darkMenu"
									>
										<li>
											<a href="/shivamrai5476">
												{/* SVG removed */}
												Profile
											</a>
										</li>
										<li>
											<a href="/settings">
												{/* SVG removed */}
												Settings
											</a>
										</li>
										<li>
											<span className="flex items-center">
												{/* SVG removed */}
												<p>Light Mode</p>
											</span>
										</li>
										<li>
											<button onClick={handleLogout}>
												{/* SVG removed */}
												Logout
											</button>
										</li>
									</ul>
								</div>
							</li>
							:
							<li>
								<NavLink to='/login' className='text-base'>
									Sign In
								</NavLink>
							</li>}
					</ul>
				</div>
			</header>
			{/* <nav className="w-full flex-shrink-0 z-50 backdrop-blur dark:bg-rtlDark bg-gradient-to-r from-pink-500 to-orange-300  border-b border-b-accentNeon/20 flex items-center justify-between p-1 px-12">
				<div
					className="select-none hover:opacity-80 z-50  flex items-center text-base gap-1 p-[2px] rounded-r-full px-4 "
				>
					<a href="/">

						<img
							src={cmplogo}
							alt="logo"
							className="w-44 select-none text-red-400 md:block hidden"
						/>
					</a>
				</div>

				<div className="text-accentNeon flex items-center justify-center gap-2">
					<a
						target="_blank"
						href="https://github.com/devyanshyadav/Dev-Components"
					>
						<FaGithub className="text-4xl" />
					</a>
					<SearchModal />
					<div className="md:hidden">
						<MobileSidebar />
					</div>
				</div>
			</nav> */}

			
			{/* <div className='w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75  bg-gradient-to-r from-pink-500 to-orange-300'>

				<div className='max-w-7xl mx-auto'>
					<nav className="navbar py-1 text-white  justify-between ">
						<div className="flex-1">
							<NavLink to='/'>
								<img src={cmplogo} alt="Logo" className="hidden md:block w-auto  h-14" />
							</NavLink>
							<ul className="ml-4 space-x-4 hidden lg:flex">
								<NavLink style={navigationActive} to='/chatbot/analytics'><li className="btn btn-sm btn-ghost">Chatbot</li></NavLink>
								<NavLink style={navigationActive} to='account'><li className="btn btn-sm btn-ghost">Account</li></NavLink>
								<NavLink style={navigationActive} to='subscription'><li className="btn btn-sm btn-ghost">Subscription</li></NavLink>
							</ul>
							<label className="btn btn-circle swap swap-rotate md:hidden">
								<input type="checkbox" />
								<svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
								<svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
							</label>
						</div>

						<div className="flex-none gap-2" >
							<div className="dropdown dropdown-end" onClick={navLogin}>
								<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar overflow-hidden flex justify-center items-center">
									{(localStorage.getItem('authToken')) ? <div className="bg-pink-400 w-full h-full flex justify-center items-center">
										<div className="w-full h-full flex items-center justify-center"><span className="font-bold text-lg uppercase" >shivam</span></div>
									</div> : <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="9" r="3" stroke="#1C274C" strokeWidth="1.5"></circle> <path d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>}

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
				</div>
			</div> */}
		</>
	)
}