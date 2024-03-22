import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import SubscriptionNav from '../pages/subscriptionpages/SubscriptionNav'
import ActivePlan from '../pages/subscriptionpages/ActivePlan'

const SubscriptionRoutes = () => {
  return (
    <>
    <SubscriptionNav />
    <Outlet />
    </>
  )
}

export default SubscriptionRoutes
