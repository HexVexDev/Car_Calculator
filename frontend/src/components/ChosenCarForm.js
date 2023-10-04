import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import defaultimg from '../images/moderncar.jpg';
import { AppContext } from '../context/AppContext';

const ChosenCarForm = ({ updateContext }) => {
  const { state } = useContext(AppContext);

  const handleChange = (fieldName, value) => {
    updateContext({ ...state, [fieldName]: value });
  };

  const [chosenmake, setChosenMake] = useState(0);
  const [makedata, setMakeData] = useState([]);
  const [vehicledata, setVehicleData] = useState([]);
  const [chosenvehicle, setChosenVehicle] = useState(0);
  const [vehicle_image, setVehicleImage] = useState(defaultimg);

  // Fetch makes data when the component mounts
  useEffect(() => {
    axios.get('http://localhost:8080/makes')
      .then((response) => {
        setMakeData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // An empty dependency array ensures it runs only once

  // Fetch vehicle data when chosenmake changes
  useEffect(() => {
    const vehicle_make = { vehicle_make: parseInt(chosenmake) };
    if (chosenmake>0) {
      axios.post('http://localhost:8080/vehicles', vehicle_make)
        .then((response) => {
          setVehicleData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [chosenmake]);

  // Fetch vehicle image and update context when chosenvehicle changes
  useEffect(() => {
    console.log(chosenvehicle);
    let chosenvehobject = vehicledata[chosenvehicle];
    if (chosenvehicle>0) {
      setVehicleImage('http://localhost:9090/images/'+chosenvehobject.vehicle_image);
      handleChange('selectaut', chosenvehobject.vehicle_autonomy);
    }
  }, [chosenvehicle]);
 
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
        <select id="makes" onChange={(event)=>setChosenMake(event.target.value)}>
          {makedata.map((make) => (
            <option key={make.id} value={make.id}>{make.make_name}</option>
          ))}
        </select>
      </div>
      <div className="col">
        {vehicledata && vehicledata.length>0 ? (
          <>
           <label htmlFor="vehicles">Select Vehicle:</label>
            <select id="vehicles" onChange={(event)=>{console.log('Before setChosenVehicle:', chosenvehicle);
  setChosenVehicle(event.target.value);
  console.log('After setChosenVehicle:', event.target.value);}}>
              {vehicledata.map((vehicle) => (
                <option key={vehicle.vehicle_id} value={vehicle.vehicle_id}>
                  {vehicle.vehicle_name}({vehicle.vehicle_autonomy}km/l)
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