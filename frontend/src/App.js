import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Carcalcmain from './components/Carcalcmain';
import Adminpanel from './components/Adminpanel';



const App =()=> {
  return (
    <Routes>
      <Route path="/" element={<Carcalcmain/>}></Route>
      <Route path="/login" element={<Adminpanel/>}></Route>
    </Routes>

  );

}

export default App;
