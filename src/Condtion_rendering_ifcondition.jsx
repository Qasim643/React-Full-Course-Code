import React, { useState } from "react";


// function Condtion_rendering_ifcondition()   
// {
//     const [logedIn, setlogedin]= useState(true);
    
//     return(
//         <div>
//             {logedIn? <h1>Your are Loged In</h1>:<h1>Your are Loged Out</h1>}
//         </div>
//     );
           
// }

// export default Condtion_rendering_ifcondition;

function Condtion_rendering_ifcondition()
{
    const [logedIn,setlogedin]=useState(3)
    return(
        <div>
            {logedIn==1?
            <h1>Asim User 1</h1>
            :logedIn==2?
            <h1>Qasim User 2</h1>
            :<h1>Ali User 3</h1>
            }
        </div>
    )
}

export default Condtion_rendering_ifcondition;