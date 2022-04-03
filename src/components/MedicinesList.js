import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../auth/authContext";
import api from "../api/api";

const MedicinesList = () => {

  const { user } = useContext(AuthContext);

  // Handling showing medicines
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    api.get("/medicines/medicines/")
      .then((response) => {
        // setMedicines(response.data.results)
        console.log(response.data.results);
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