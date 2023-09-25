import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import defaultimg from "../images/moderncar.jpg";
import { AppContext } from '../context/AppContext';

const ChosenCarForm = ({ updateContext }) => {
  const { state } = useContext(AppContext);

  const handleChange = (fieldName, value) => {
    updateContext({ ...state, [fieldName]: value });
  };

  const [makedata, setMakeData] = useState([]);
  const [chosenmake, setChosenMake] = useState([]);
  const [vehicledata, setVehicleData] = useState([]);
  const [chosenvehicle, setChosenVehicle] = useState([]);
  const [vehicle_image, setVehicle_image] = useState(defaultimg);

  useEffect(() => {
    try {
      const response = axios.get('http://localhost:8080/makes');
      if (response.status === 200) {
        setMakeData(response);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  function handleMakeFiltering(e) {
    setChosenMake(e.target.value);
    axios.get('http://localhost:8080/vehicles', chosenmake)
      .then((response) => {
        setVehicleData(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleVehicleDispatch(e) {
    setChosenVehicle(e.target.value);
    setVehicle_image("http://localhost:9090/images/" + chosenvehicle.vehicle_image);
    handleChange('selectaut', chosenvehicle.vehicle_autonomy);
  }

  return (
    <div>
      <h2>Car B</h2>
      <div className="col">
        <>
          <img src={vehicle_image} width="300" height="300" alt='vehicle_image' />
        </>
      </div>
      <div className="col">
        <label htmlFor="makes">Select Make:</label>
        <select id="makes" onChange={handleMakeFiltering}>
          {makedata.map((make) => (
            <option key={make.id} value={make.id}>{make.make_name}</option>
          ))}
        </select>
      </div>
      <div className="col">
        {vehicledata && vehicledata.length>0 ? (
          <>
           <label htmlFor="vehicles">Select Vehicle:</label>
            <select id="vehicles" onChange={handleVehicleDispatch}>
              {vehicledata.map((vehicle) => (
                <option key={vehicle.vehicle_id} value={vehicle.vehicle_id}>
                  {vehicle.vehicle_name} ({vehicle.vehicle_autonomy})
                </option>
              ))}
            </select>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ChosenCarForm;