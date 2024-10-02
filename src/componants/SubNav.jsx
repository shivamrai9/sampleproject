import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import clsx from "clsx";
import DevButton from './DevButton';
import { RiMenu5Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

const SubNav = ({ links, baseRoute, tittle }) => {
  const location = useLocation();

  return (
    <>
      <div className="sticky top-0 z">
        {/* Desktop Navbar */}
        <div className="hidden sm:flex bg-brand-background border-b darkBorderBottom h-16">
          <div className="flex justify-between items-center w-full bg-base-100">
            <div className="ml-4 flex items-center">
              {/* <button className="p-2 mr-2"> */}
              {/* SVG removed */}
              {/* </button> */}
              <a className="flex gap-2 flex-center items-center" href="/">
              <p className="text-lg font-semibold -mb-2 text-logo-orange">{tittle}</p>
                {/* <img
                  className="object-contain h-auto w-[200px] ml-2"
                  src="https://do6gp1uxl3luu.cloudfront.net/banner+and+logos/name.webp"
                  alt="namasteDev"
                  width="200"
                  height="200"
                /> */}
              </a>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1 flex items-center ">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={`${baseRoute}/${link.path}`}
                      className={clsx(
                        "hover:text-slate-900 select-none text-base relative rounded-none",
                        location.pathname === `${baseRoute}/${link.path}`
                          ? "border-b-2 border-pink-500 font-bold"
                          : ""
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}

                <li>

                </li>
              </ul>
            </div>
          </div>
        </div>

{/* Mobile Navbar */}
        <div className="sm:hidden flex relative bg-brand-background border-b darkBorderBottom">
          <div className="flex justify-between items-center w-full bg-base-100">
            <div className="ml-2">
              <a className="flex gap-2 flex-center items-center" href="/">
              <p className="text-lg font-semibold -mb-2 text-logo-orange">{tittle}</p>
              </a>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1 flex items-center">
                <li>
                  <div className="p-0">
                    <div className="drawer drawer-end z-50">
                      <input
                        id="my-drawer-mobile"
                        className="drawer-toggle"
                        type="checkbox"
                      />
                      <div className="drawer-content">
                        <label
                          htmlFor="my-drawer-mobile"
                          role="button"
                          className="drawer-button flex justify-center items-center btn bg-transparent border-none shadow-none hover:bg-[#E8E9EB] hover:bg-opacity-0"
                        >
                          <GiHamburgerMenu className='text-3xl'/>
                        </label>
                      </div>
                      <div className="drawer-side">
                    <label
                      htmlFor="my-drawer-mobile"
                      aria-label="close sidebar"
                      className="drawer-overlay"
                    ></label>
                    <ul className="bg-white darkBlogsCardBody min-h-full w-[270px] p-3">
                      <div className="flex justify-between items-center pb-2 border-b darkBorderBottom">
                        <div className="flex gap-x-3 m-1">
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
                          <div className="flex flex-col">
                            <p className="text-lg font-semibold -mb-2 text-logo-orange">Hello</p>
                            <p className="text-base">Shivam</p>
                          </div>
                        </div>
                        <label
                          htmlFor="my-drawer-mobile"
                          aria-label="close sidebar"
                          className="drawer-overlay cursor-pointer"
                        >
                          {/* SVG removed */}
                        </label>
                      </div>
                      <div className="mt-2 flex flex-col gap-y-1 -ml-1 -mr-1">
                        {links.map((link) => (
                          <li key={link.name}>
                            <Link
                              to={`${baseRoute}/${link.path}`}
                              className={clsx(
                                "hover:text-slate-900 select-none text-base relative rounded-none darkBlogstext",
                                location.pathname === `${baseRoute}/${link.path}`
                                  ? "border-b-2 border-pink-500 font-bold"
                                  : ""
                              )}
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    </ul>
                  </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>


        

        {/* Modal */}
        <div>
          <dialog id="communityModal" className="modal custom-modal-backdrop">
            <form className="modal-backdrop" method="dialog">
              <button className="cursor-default">close</button>
            </form>
          </dialog>
        </div>
      </div>

      {/*       
      <nav className=" bg-slate-100-800  p-4 z-50 ps-12">
        
        <ul className="flex space-x-9">

          { tittle && 

            <li className="md:block hidden select-none text-lg font-extrabold ">
        {tittle}
        </li>
        }
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={`${baseRoute}/${link.path}`}
                className={clsx(
                  "hover:text-slate-900 select-none",
                  location.pathname === `${baseRoute}/${link.path}`
                    ? "border-b-2 border-pink-500 font-bold"
                    : ""
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav> */}
    </>
  );
};


export default SubNav
