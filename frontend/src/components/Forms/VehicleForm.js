import React,{useState,useEffect} from "react";


const VehicleForm= ({apiInstance1,apiInstance2,setUpdate}) =>{
    const [vehicle_name,setVehicle_name] = useState('');
    const [vehicle_autonomy,setVehicle_autonomy] = useState('');
    const [vehicle_image,setVehicle_image] = useState(null);
    const [vehicle_Make,setVehicle_Make] = useState('');
    const [makedata,setMakedata] = useState([]);

    useEffect(()=>{
        apiInstance1.get('makes')
        .then((response) => {
            setMakedata(response);  
        })
        .catch((error) => {
            console.error(error);
        });
    });

    const handleSubmit =(event) =>{
        event.preventDefault();
        handleCarUpload();
        handleImageUpload(event);
        setUpdate(1);
    };
    const handleCarUpload = () =>{
        
        const vehicle = {
            vehicle_name:vehicle_name,
            vehicle_autonomy:parseInt(vehicle_autonomy),
            vehicle_image:vehicle_image,
            vehicle_make:{}
        };
        const mockvehicle ={
            vehicle: vehicle,
            make_id: parseInt(vehicle_Make)
        }
        console.log(mockvehicle)
        apiInstance1.post(`vehicles/addvehicle`,mockvehicle)
            .then((response) => {
                console.log(response);
                
            })
            .catch((error) => {
                console.error(error);
            });  
    }

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
      
        if (file) {
          // Rename the image based on the vehicle_name
          const lowercaseName = vehicle_name.toLowerCase();
      
          // Send the file directly via Axios
          apiInstance2.post(`uploadImage/${lowercaseName}`, file).then((response) => {
            console.log('Image uploaded successfully:', response.data);
            // Handle the response as needed
          });
        }
      };
   
return(
    <form id='vehicleform' onSubmit={handleSubmit}>
    <div class="form-group">
        <label htmlFor='vehicle_name'>Vehicle Name:</label>
        <input
          type='text'
          id='vehicle_name'
          class ='form-control'
          placeholder='Ingrese un nombre de vehículo'
          required
          onChange={(event) => setVehicle_name(event.target.value)}
        ></input>
        </div>
        <div class="form-group">
        <label htmlFor='vehicle_autonomy'>Vehicle Autonomy:</label>
        <input
          type='number'
          id='vehicle_autonomy'
          class ='form-control'
          placeholder='Ingrese la autonomía del vehículo'
          required
          onChange={(event) => setVehicle_autonomy(event.target.value)}
        ></input>
        </div>
        <div class="form-group">
        <label htmlFor='vehicle_image'>Vehicle Image:</label>
        <input
          type='file'
          id='vehicle_image'
          class ='form-control'
          placeholder='Seleccione una imagen para el vehículo'
          required
          onChange={(event) => setVehicle_image(event.target.value)}
        ></input>
        </div>
        <label htmlFor="vehicleMake">Vehicle Make:</label>
      <select id="makes" onChange={(event) => setVehicle_Make(event.target.value)}>
          {makedata.map((make) => (
              <option key={make.id} value={make.id}>{make.make_name}</option>
          ))}
      </select>
        <button type='submit' class= 'btn btn-primary'>Login</button>
      </form>
);
}
export default VehicleForm;