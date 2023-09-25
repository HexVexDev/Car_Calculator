import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import carlogo from "../images/carlogo.jpg";
import '../App.css';
import CustomCarForm from './CustomCarForm';
import ChosenCarForm from "./ChosenCarForm";
import DisplayComponent from './DisplayComponent';
import CalculateButton from './CalculateButton';
import { AppContext } from "../context/AppContext";


const Carcalcmain =()=> {
  const {updateContext,calculateValues} = useContext(AppContext);
  return (

  <div className="container">
    <nav class="navbar navbar-dark bg-dark">
      <ul>
            <img src={carlogo} width="30" height="30" class="d-inline-block align-top" alt=""></img>
            <a href="#" className="navbar-brand">Car Calculator</a>
      </ul>
    </nav>
    <main className="container alert alert-danger">
      <div className="row">
        <CustomCarForm updateContext={updateContext}/>
      <div className="col-sm alert alert-success">
      <img src="vs-image.png" alt="VS"></img>
      </div>
      <div className="col-sm">
        <ChosenCarForm updateContext={updateContext}/>
      </div>
      <CalculateButton calculateValues={calculateValues}/>
      </div>
    </main>
    <DisplayComponent />
  </div>

  );

}

export default Carcalcmain;
