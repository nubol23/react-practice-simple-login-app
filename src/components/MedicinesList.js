import React, {useContext, useEffect, useState} from 'react';
import axios from "../api/axios";
import {AuthContext} from "../auth/authContext";

const MedicinesList = () => {

  const { user } = useContext(AuthContext);

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
        // console.log(response.data.results);
      })
      .catch((error) => {
        setMedicines(meds => []);
      })
  }, [])

  return (
    <div>
      <ul>
          {
              medicines.map(medicine => <li key={medicine.id}>{medicine.name} - {medicine.id}</li>)
          }
      </ul>
    </div>
  );
};

export default MedicinesList;