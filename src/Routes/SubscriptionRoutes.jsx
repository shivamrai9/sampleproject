import React from 'react'
import Analytics from '../pages/chatbotpages/Analytics'
import { Outlet, Route, Routes } from 'react-router-dom'

const SubscriptionRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Analytics/>} />
        </Route>
      </Routes>
    </>
  )
}

export default SubscriptionRoutes
