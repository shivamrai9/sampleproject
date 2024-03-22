import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import SubscriptionNav from '../pages/subscriptionpages/SubscriptionNav'
import ActivePlan from '../pages/subscriptionpages/ActivePlan'

const SubscriptionRoutes = () => {
  return (
    <>
    <SubscriptionNav />
      <Routes>
          <Route path='/activeplan' element={<ActivePlan />} />
        {/* <Route path="/" element={<Outlet />}> */}
          <Route path='/packagehistory' element={<ActivePlan />} />
        {/* </Route> */}
      </Routes>
    </>
  )
}

export default SubscriptionRoutes
