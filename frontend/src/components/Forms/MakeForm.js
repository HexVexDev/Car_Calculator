import React, { useState } from "react";


const MakeForm = ({apiInstance1,setUpdate}) => {
    const [make_name, setMake_name] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const make = {
            make_name: make_name,
        };
        apiInstance1.post(`makes/addmake`, make)
            .then((response) => {
                console.log(response);
                setUpdate(1);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <form id="makeForm" onSubmit={handleSubmit}>
            <label htmlFor="make_name">Make:</label>
            <input type="text" id="makes" required placeholder="Ingrese una marca" onChange={(event) => setMake_name(event.target.value)}></input>
            <button type="submit">Submit</button>
        </form>
    );
}

export default MakeForm;