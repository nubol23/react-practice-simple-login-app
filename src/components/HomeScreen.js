import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import { AuthContext } from '../auth/authContext'
import { authTypes } from '../types/types';

export const HomeScreen = () => {

  const navigate = useNavigate();

  const { user, userDispatch } = useContext(AuthContext);

  const handleLogout = () => {
    userDispatch({ type: authTypes.logout })

    navigate('/login', { replace: true });
  }

  // Handling showing medicines
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    axios.get("/medicines/medicines/", {
      headers: {
        'Authorization': `Bearer ${user.accessToken}`
      }
    })
      .then((response) => {
        setMedicines(response.data.results)
        // Called twice, why?
        // console.log(response.data.results);
      })
      .catch((error) => {
        setMedicines(meds => []);
      })
  }, [])

  return (
    <>
      <div>HomeScreen</div>
      <br />
      <button onClick={handleLogout}>
        Logout
      </button>
      <br />
      <br />
      <ul>
        {
          medicines.map(medicine => <li key={medicine.id}>{medicine.name} - {medicine.id}</li>)
        }
      </ul>
    </>
  )
}
