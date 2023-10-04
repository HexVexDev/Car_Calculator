import React, { createContext, useState } from 'react';

const initialState = {
  calcaut: 0,
  selectaut: 0,
  saved:0,
  gastype: 21,
  cmileage: 0,
  date: '',
  weeklycost: 1
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, setState] = useState(initialState);

  const updateContext = (newState) => {
   console.log("Context updated: " + newState.selectaut);
    setState({ ...state, ...newState });

  };

  const calculateValues =() =>{
    let today = new Date();
    let dateacq = new Date(state.date)
    let time_diff = Math.abs(today-dateacq)/(7*24*60*60*1000);
    let formattedt = Math.floor(time_diff);
    let mpweek = state.cmileage/formattedt;
    let milecost = mpweek/state.weeklycost;
     state.calcaut = milecost/state.gastype;
    let selectedweekcost = (mpweek/state.selectaut)*state.gastype;
    state.saved = state.weeklycost-selectedweekcost;
    const newState = {
      ...state
    };
    // Update the state with the new values
    setState(newState);
    console.log("Updated state: "+ newState);
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        updateContext,
        calculateValues
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
