import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import clsx from "clsx";

const SubNav = ({ links, baseRoute ,tittle}) => {
    const location = useLocation();

    return (
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
      </nav>
    );
  };
  

export default SubNav
