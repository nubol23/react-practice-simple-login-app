import React, {useState} from 'react';
import api from "../api/api";
import "./medicinesList.css"
import useRequest from "../hooks/useRequest";

const MedicinesList = () => {

  // Handling showing medicines
  const [medicines, setMedicines] = useState([]);

  useRequest(
    api.get("/medicines/medicines/"),
    (response) => {
      console.log("Resp")
      setMedicines(response.data.results);
    },
    (error) => {
      console.log("Err")
      setMedicines(meds => []);
    },
  )

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