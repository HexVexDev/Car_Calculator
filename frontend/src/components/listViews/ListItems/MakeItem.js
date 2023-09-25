import React from 'react';


const MakeItem = (props) => {

    
    return (
        
        <tr>
        <td>{props.id}</td>
        <td>{props.make_name}</td>
        </tr>
    );

  
};
export default MakeItem;