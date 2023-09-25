import React, { useEffect, useState } from "react";
import Cookies from 'universal-cookie';
import MakeList from './listViews/MakeList';
import VehicleList from "./listViews/VehicleListFilter";
import axios from 'axios';





const Adminpanel =()=> {
  const cookies = new Cookies();
  const [isLogged,setIsLogged] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const jwtToken = cookies.get("authorization");
  const [view,setView] = useState('makes');
  const apiInstance1 = axios.create({
    baseURL: 'http://localhost:8080/', // Replace with your API base URL
    headers: {
      common: {
        'Content-Type': 'application/json', // JSON content header
        Authorization: jwtToken ? `Bearer ${jwtToken}` : '', // Add the Authorization header with the token if it exists
      },
    },
  });
  const apiInstance2 = axios.create({
    baseURL: 'http://localhost:9090/', // Replace with your API base URL
    headers: {
      common: {
        'Content-Type': 'application/json', // JSON content header
      },
    },
  });
  
  useEffect(()=>{
    if(jwtToken){
      setIsLogged(1);
    }else{
      setIsLogged(0);
    }
  },[isLogged]);

  const submitLogin = async (event) => {

    event.preventDefault();
    const authCredentials = {
      username: username,
      password: password
    };
    try {
      const response = await axios.post('http://localhost:8080/login', authCredentials);
      if (response.status === 200) {
        const token = response.headers['authorization']; // Access the 'Authorization' header
        //Formatting of the token
        const formatToken = token.slice(7);
        cookies.set("authorization",formatToken); // Setting cookie for authorization
        cookies.set("user",authCredentials.username);
        setIsLogged(1);
      } else {
        
        console.error('Login error:', response.statusText);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="col">
        {isLogged == 0 ? (
          <>
    <form id='loginform' onSubmit={submitLogin}>
          <div class="form-group">
              <label htmlFor='username'>Username:</label>
              <input
                type='text'
                id='username'
                class ='form-control'
                placeholder='Ingrese su usuario'
                required
                onChange={(event) => setUsername(event.target.value)}
              ></input>
              </div>
              <div class="form-group">
              <label htmlFor='password'>Password:</label>
              <input
                type='password'
                id='pass'
                class ='form-control'
                placeholder='Ingrese su clave'
                required
                onChange={(event) => setPassword(event.target.value)}
              ></input>
              </div>
              <button type='submit' class= 'btn btn-primary'>Login</button>
            </form>
          </>
        ) : (
          <>
          <select onChange={(event) =>setView(event.target.value)} class='form-control form-control-lg'> 
          <option value="makes" id="make">Makes</option> 
          <option value="vehicles" id="vehicle">Vehicles</option>
          </select>
          {view == 'makes' ?(
            <>
            <MakeList apiInstance1={apiInstance1} />
            </>

          ):(
            <>
            <VehicleList apiInstance1={apiInstance1} apiInstance2={apiInstance2} />
            </>
          )}
          </>
        )}
      </div>
  );

}

export default Adminpanel;