import React from "react";
import { useLocation, useNavigate } from "react-router-dom";





function Gohome(){
// ============================================================================================================
                        // code id : uselocation in react routing 

    const location= useLocation();                        

    console.log(location);



// ====================================================================================================
                                // this is 1st method  to navigate 

//     const nevigate =useNavigate();


    // ====================================================================================================
                                // this is 2nd method  to navigate 
    // const nevTopage=()=>{
    //     const x=1;
    //     if(x==1){
    //         nevigate('/about');

    //     }
    //     else
    //     {
    //         nevigate('/gohome');
    //     }
    // }

{/* ================================================================================================================= */}
                                {/* meeet with 3rd method to navigate  */}

    //     const nevTopage=(url)=>{
    //         nevigate(url)
    //         }
        



    return(
        <div>
            <h1>This is Home</h1>

{/* ======================================================================================================= */}
                        {/* React Routing lecture 8   *** Navigation of Click  ***/}  
{/* ================================================================================================== */}
            {/* we create these button in order to nevigate on different pages using buttons  */}


            {/* <button onClick={()=>nevigate('/about')}>Go To About page</button>
            <button onClick={()=>nevigate('/gohome')}>Go To Home page</button> */}



{/* ================================================================================================== */}
            {/* we create a common function to perfom navigation on base of some conditon   */}
                {/* to navigate with function use const nevTopage which acts like a function  */}

            {/* <button onClick={()=>nevTopage()}>Go To About page</button>
            <button onClick={()=>nevTopage()}>Go To Home page</button>             */}



{/* ======================================================================================================== */}
                {/* 3rd method of url  to perform navigation  */}


            {/* <button onClick={()=>nevTopage('/about')}>Go To About page</button>
            <button onClick={()=>nevTopage('/gohome')}>Go To Home page</button>             */}
        </div>
    )
}
export default Gohome;