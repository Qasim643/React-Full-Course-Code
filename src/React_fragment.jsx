
import React from "react";
function React_fragment()
{
    return(

        // It will give error
        
        // <div>
        // <td>Qasim</td>
        // <td>Boota</td>
        // </div>

        // It will not give error 
        <>
        <td>Qasim</td>
        <td>Boota</td>
        </>
    )
}
export default React_fragment;