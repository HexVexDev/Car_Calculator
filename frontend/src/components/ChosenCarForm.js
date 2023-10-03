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
  const [chosenmake, setChosenMake] = useState(0);
  const [vehicledata, setVehicleData] = useState([]);
  const [chosenvehicle, setChosenVehicle] = useState([]);
  const [vehicle_image, setVehicle_image] = useState(defaultimg);

  useEffect(() => {
    axios.get('http://localhost:8080/makes')
    .then((response) => {
        console.log(response);
        setMakeData(response.data);
        
    })
    .catch((error) => {
        console.error(error);
        
    });
  },[chosenmake]);

  function handleMakeFiltering(event) {
    setChosenMake(event.target.value);
    let vehicle_make = {vehicle_make:parseInt(chosenmake)}
    axios.get('http://localhost:8080/vehicles', {params:vehicle_make})
      .then((response) => {
        setVehicleData(response.data);
        console.log(vehicle_make)
        
      })
      .catch((error) => {
        console.error(error);
        console.log(vehicle_make +"error");
      });
  }

  function handleVehicleDispatch(event) {
    setChosenVehicle(event.target.value);
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
        <select id="makes" onChange={(event) => handleMakeFiltering(event)}>
          {makedata.map((make) => (
            <option key={make.id} value={make.id}>{make.make_name}</option>
          ))}
        </select>
      </div>
      <div className="col">
        {vehicledata && vehicledata.length>0 ? (
          <>
           <label htmlFor="vehicles">Select Vehicle:</label>
            <select id="vehicles" onChange={(event)=>handleVehicleDispatch(event)}>
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