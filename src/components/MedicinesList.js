import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../auth/authContext";
import api from "../api/api";
import {authTypes} from "../types/types";
import "./medicinesList.css"

const MedicinesList = () => {

  const { userDispatch } = useContext(AuthContext);

  // Handling showing medicines
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    api.get("/medicines/medicines/")
      .then((response) => {
        setMedicines(response.data.results)
        // console.log(response.data.results);
      })
      .catch((error) => {
        setMedicines(meds => []);

        // If returned 401
        if (error.response && error.response.status === 401)
          userDispatch({ type: authTypes.logout });

      })
  }, [])

  return (
    <div className="table-box">
      <table className="table table-hover medicine-table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {
            medicines.map(medicine => (
              <tr key={medicine.id}>
                <td>{medicine.id}</td>
                <td>{medicine.name}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default MedicinesList;