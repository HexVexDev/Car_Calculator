import React from 'react';


const VehicleItem = ({id,make_name,vehicle_name,vehicle_autonomy}) => {
    return (
        <tr>
              <td>{id}</td>
              <td>{vehicle_name}</td>
              <td>{vehicle_autonomy}</td>
              {make_name&&<td>{make_name}</td>}
        </tr>
    );

};
export default VehicleItem;