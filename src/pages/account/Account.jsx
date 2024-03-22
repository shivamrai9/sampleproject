import React from 'react'
import { Outlet } from 'react-router-dom'
import AccountNav from './AccountNav'

const Account = () => {
  return (
    <>
    <AccountNav />
        <Outlet />
    </>
  )
}

export default Account
