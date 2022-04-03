import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import { AuthContext } from '../auth/authContext'
import { authTypes } from '../types/types';
import MedicinesList from "./MedicinesList";

export const HomeScreen = () => {

  const navigate = useNavigate();

  const { userDispatch } = useContext(AuthContext);

  const handleLogout = () => {
    userDispatch({ type: authTypes.logout })

    navigate('/login', { replace: true });
  }

  return (
    <>
      <div>HomeScreen</div>
      <br />
      <button onClick={handleLogout}>
        Logout
      </button>
      <br />
      <MedicinesList/>
    </>
  )
}
