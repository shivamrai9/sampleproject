import React from 'react'
import { Navbar } from '../Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    {/* <Navbar /> */}
    <div  className="overflow-y-scroll">
      <Outlet />
    </div>
    </>
  )
}

export default MainLayout
