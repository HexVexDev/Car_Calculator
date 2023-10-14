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
    console.log("todays date "+today);
    let dateacq = new Date(state.date)
    console.log("dateacq "+dateacq);
    let time_diff = Math.abs(today-dateacq)/(7*24*60*60*1000);
    console.log("time gap "+time_diff);
    let formattedt = Math.floor(time_diff);
    console.log("formattedt "+formattedt);
    let mpweek = state.cmileage/formattedt;
    console.log("cmileage "+state.cmileage)
    console.log("mpweek "+mpweek);
    let litperweek = state.weeklycost/state.gastype;
    console.log("litperweek "+litperweek);
    console.log("weeeklycost "+ state.weeklycost);
   state.calcaut = mpweek/litperweek;
     console.log("gas type " +state.gastype);
     console.log("calcaut " +state.calcaut);
    let selectedweekcost = (mpweek/state.selectaut)*state.gastype;
    console.log("select aut "+ state.selectaut);
    console.log("selectedweekcost "+selectedweekcost);
    state.saved = state.weeklycost-selectedweekcost;
    console.log("saved "+state.saved);
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
