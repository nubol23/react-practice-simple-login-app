import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext'
import { authTypes } from '../types/types';
import MedicinesList from "./MedicinesList";
import "./home.css"

export const HomeScreen = () => {

  const navigate = useNavigate();

  const { userDispatch } = useContext(AuthContext);

  const handleLogout = () => {
    userDispatch({ type: authTypes.logout })

    navigate('/login', { replace: true });
  }

  return (
    <div className="home-box animate__animated animate__fadeIn">
      <div className="home-header">
        <h3>HomeScreen</h3>
        <br />
        <button onClick={handleLogout} type="button" className="btn btn-warning">
          Logout
        </button>
      </div>

      <MedicinesList/>
    </div>
  )
}
