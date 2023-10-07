import React,{useState,useEffect} from "react";


const VehicleForm= ({apiInstance1,apiInstance2,setUpdate,chosenmake}) =>{
    const [vehicle_name,setVehicle_name] = useState('');
    const [vehicle_autonomy,setVehicle_autonomy] = useState('');
    const [vehicle_image,setVehicle_image] = useState(null);

    const handleSubmit =(event) =>{
        event.preventDefault();
        console.log(vehicle_image);
        const lowercaseName = vehicle_name.toLowerCase();
        const formattedName = lowercaseName.replace(/ /g,'-');
        handleCarUpload(formattedName);
        handleImageUpload(formattedName);
        setUpdate(1);
    };
    const handleCarUpload = (formattedName) =>{
        
        const vehicle = {
            vehicle_name:vehicle_name,
            vehicle_autonomy:parseInt(vehicle_autonomy),
            vehicle_image:formattedName,
            vehicle_make:parseInt(chosenmake)
        };
        console.log(vehicle)
        apiInstance1.post(`vehicles/addvehicle`,vehicle)
            .then((response) => {
                console.log(response);
                
            })
            .catch((error) => {
                console.error(error);
                console.log("Vehicle object" + vehicle);
            });  
    }

    const handleImageUpload = (formattedName) => {
        if (vehicle_image) {
          // Send the file directly via Axios
          apiInstance2.post(`uploadImage/${formattedName}`,vehicle_image).then((response) => {
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
          onChange={(event) => setVehicle_image(event.target.files[0])}
        ></input>
        </div>
        <button type='submit' class= 'btn btn-primary'>Save Vehicle</button>
      </form>
);
}
export default VehicleForm;