import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import genericcar from "../images/car.svg";

const CustomCarForm = ({ updateContext }) => {
  const { state } = useContext(AppContext);

  const handleChange = (fieldName, value) => {
    updateContext({ ...state, [fieldName]: value });
  };

  return (
    <div className="col-sm">
      <h2>Car A</h2>
      <div className="col">
        <img src={genericcar} width="300" height="300" className="d-inline-block align-top" alt="" />
      </div>
      <div className="col">
        <label htmlFor="gastype">Gas Type:</label>
        <select
          className='custom-select'
          id='gastype'
          onChange={(event) => handleChange('gastype', event.target.value)}
        >
          <option defaultValue>Choose your Gas type...</option>
          <option value='20' name='regular'>
            Regular($20)
          </option>
          <option value='22' name='Premium'>
            Premium($22)
          </option>
          <option value='15' name='Diesel'>
            Diesel($15)
          </option>
        </select>
      </div>
      <div className="col">
        <label htmlFor="mileage">Mileage:</label>
        <input
          required='required'
          type='number'
          id='mileage'
          onChange={(event) => handleChange('cmileage', event.target.value)}
        />
      </div>
      <div className="col">
        <label htmlFor="date">Date of acquisition:</label>
        <input
          required='required'
          type='date'
          id='date'
          onChange={(event) => handleChange('date', event.target.value)}
        />
      </div>
      <div className="col">
        <label htmlFor="weekly">Weekly Cost:</label>
        <input
          required='required'
          type='number'
          id='weekly'
          onChange={(event) => handleChange('weeklycost', event.target.value)}
        />
      </div>
    </div>
  );
};

export default CustomCarForm;
