import react from "react";
import {useSearchParams} from 'react-router-dom';
function Filter(){
    const [searchparams, setsearchparams]= useSearchParams();
    console.log(searchparams.get('age'))
    console.log(searchparams.get('Lahore'))
    const age= searchparams.get('age');
    const city= searchparams.get('city');
    return( 
        <div className="filter">
            <h1>Filter Page</h1>
            <h4>Age is : {age}</h4>
            <h4>City is :{city}</h4>
            <input type="number" onChange={(e)=>setsearchparams({number:e.target.value})} />
            <button onClick={()=>setsearchparams({age:22,city:'Lahore'})}>set Age in Search Param</button>
        </div>
    )
}
export default Filter;