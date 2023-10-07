import React,{useState,useEffect} from 'react';
import VehicleItem from './ListItems/VehicleItem';
import VehicleForm from '../Forms/VehicleForm';

const VehicleList = ({apiInstance1,apiInstance2,chosenmake}) =>{
    const [update,setUpdate] = useState(0);
    const [vehicle_data,setVehicle_data] = useState([]);
    const [formstate,setFormState] = useState(0);
    const requestData = { vehicle_make: parseInt(chosenmake) };
    useEffect(()=>{
        apiInstance1.post('vehicles',requestData)
            .then((response) => {
                setVehicle_data(response.data);
                
            })
            .catch((error) => {
                console.log(requestData);
                console.log(chosenmake);
                console.error(error);
            });
            setFormState(0);
            setUpdate(0);

    },[update,chosenmake])

    return(
        <div>
<table className='table'>
      <thead className="thead-light">
    <tr>
      <th scope="col">Vehicle ID</th>
      <th scope="col">Vehicle Name</th>
      <th scope="col">Vehicle Autonomy</th>
    </tr>
  </thead>
    <tbody>
    {vehicle_data.map((dat) => (
        <VehicleItem id={dat.vehicleid} key={dat.vehicleid} vehicle_name={dat.vehicle_name}
         vehicle_autonomy={dat.vehicle_autonomy} />
    ))}
    </tbody>
</table>
<div>
          <h2>Add a new item</h2>
          <button onClick={() =>setFormState(1)}>+</button>
          {formstate == 1 ?(
            <>
         {<VehicleForm chosenmake={chosenmake} apiInstance1={apiInstance1} apiInstance2={apiInstance2} setUpdate={setUpdate} />}
          </>
          ):(
            <></>
          )}
          
        </div>
</div>
    );

}

export default VehicleList;