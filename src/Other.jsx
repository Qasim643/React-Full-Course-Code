import React from "react";
import { useLocation } from "react-router-dom";


function Other(){
    // ============================================================================================================
                        // code id : uselocation in react routing 

                        const location= useLocation();                        

                        console.log(location);
// =====================================================================================================    // 
    return(
        <div className="contac">
            <h1>This is Other Page </h1>
            <h2 >Hello Qasim i am Other page which incudes the Other  businesses like invesments...</h2>
        </div>



    )
}


export default Other;