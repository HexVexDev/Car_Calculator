import React from 'react';


const VehicleItem = ({id,vehicle_name,vehicle_autonomy}) => {
    return (
        <tr>
              <td>{id}</td>
              <td>{vehicle_name}</td>
              <td>{vehicle_autonomy}</td>
        </tr>
    );

};
export default VehicleItem;