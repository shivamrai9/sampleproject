import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import SubscriptionNav from '../pages/subscriptionpages/SubscriptionNav'
import ActivePlan from '../pages/subscriptionpages/ActivePlan'
import SubNav from '../componants/SubNav'

const SubscriptionRoutes = () => {

  const SubscriptionLink = [
    { name: "Active plan", path: "activeplan" },
    { name: "Package History", path: "packagehistory" },
  ];
  return (
    <>
    <div className="min-h-screen flex flex-col">
      {/* Sticky Nav */}
      <SubNav links={SubscriptionLink} baseRoute="/subscription" />
      
      {/* Main Content with Outlet */}
      <div className="flex-grow  border-red-700 border overflow-y-auto">
        <Outlet />
      </div>
    </div>
    </>
  )
}

export default SubscriptionRoutes
