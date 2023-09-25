import React, { useContext } from "react";
import { AppContext } from '../context/AppContext';


const DisplayComponent =()=>{
    const {calcaut,selectaut,saved} = useContext(AppContext);

return(<section className="alert alert-warning">
<div className="col">
    Autonomia 
</div>
<div className="col">
  Autonomia calculated component {calcaut}
</div>
<div className="col">
  selected car autonomy {selectaut}
</div>
<div className="col">
 Ahorro
</div>
<div className="col">
  Calculated cost {saved}
</div>
</section>);
}
export default DisplayComponent;