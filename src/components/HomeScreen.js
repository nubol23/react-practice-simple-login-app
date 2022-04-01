import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext'
import { authTypes } from '../types/types';

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
    </>
  )
}
