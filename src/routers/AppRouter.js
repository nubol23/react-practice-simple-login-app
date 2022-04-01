import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../components/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='login' element={<LoginScreen />} />
      <Route path="/*" element={<DashboardRoutes />} />
    </Routes>
  )
}
