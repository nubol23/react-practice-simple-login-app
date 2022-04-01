import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomeScreen } from '../components/HomeScreen'

export const DashboardRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
      </Routes>
    </>
  )
}
