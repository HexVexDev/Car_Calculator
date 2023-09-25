import React,{useState,useEffect} from 'react';
import MakeItem from './ListItems/MakeItem';
import MakeForm from '../Forms/MakeForm';

const MakeList = ({apiInstance1}) =>{
    const [update,setUpdate] = useState(0);
    const [make_data,setMake_data] = useState([]);
    const [formstate,setFormState] = useState(0);
    useEffect(()=>{
        apiInstance1.get('makes')
            .then((response) => {
                setMake_data(response.data); 
          
            })
            .catch((error) => {
                console.error(error);
            });
            setFormState(0);
            setUpdate(0);

    },[update])

    return(
        <div>
<table className='table'>
      <thead className="thead-light">
    <tr>
      <th scope="col">Make ID</th>
      <th scope="col">Make Name</th>
    </tr>
  </thead>
    <tbody>
    {make_data.map((dat) => (
        <MakeItem id={dat.id} key={dat.id} make_name={dat.make_name} />
    ))}
    </tbody>
</table>
<div>
          <h2>Add a new item</h2>
          <button onClick={() =>setFormState(1)}>+</button>
          {formstate == 1 ?(
            <>
         {<MakeForm apiInstance1={apiInstance1} setUpdate={setUpdate} />}
          </>
          ):(
            <></>
          )}
          
        </div>
</div>
    );

}

export default MakeList;