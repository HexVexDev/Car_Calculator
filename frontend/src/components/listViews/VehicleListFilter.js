import React,{useState,useEffect} from 'react';
import VehicleList from './VehicleList';

const VehicleListFilter = ({apiInstance1,apiInstance2}) =>{
    const [make_data,setMake_data] = useState([]);
    const [chosenmake,setChosenmake] = useState(0);

    useEffect(()=>{
        apiInstance1.get('makes')
            .then((response) => {
                setMake_data(response.data);
                
            })
            .catch((error) => {
                console.error(error);
            });
    })

    return(
        <div>
          <label htmlFor="vehicleMake">Vehicle Make:</label>
          <select id="makes" onChange={(event) => setChosenmake(event.target.value)}>
          {make_data.map((make) => (
              <option key={make.id} value={make.id}>{make.make_name}</option>
          ))}
      </select>  
      {chosenmake !== 0 && <VehicleList chosenmake={chosenmake}  apiInstance1={apiInstance1} apiInstance2={apiInstance2}/>}
        </div>
    );

}

export default VehicleListFilter;