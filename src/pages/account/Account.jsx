import React from 'react'
import { Outlet } from 'react-router-dom'
import AccountNav from './AccountNav'
import SubNav from '../../componants/SubNav'

const Account = () => {

  const AccountLinks = [
    { name: "Basic info", path: "basicinfo" },
    { name: "Payment", path: "payment" },
  ];


  return (
    <>
    {/* <AccountNav />
        <Outlet /> */}
        <div className="min-h-screen flex flex-col">
      {/* Sticky Nav */}
      <SubNav links={AccountLinks} baseRoute="/account" />
      
      {/* Main Content with Outlet */}
      <div className="flex-grow  border-red-700 border overflow-y-auto">
        <Outlet />
      </div>
    </div>
    </>
  )
}

export default Account
