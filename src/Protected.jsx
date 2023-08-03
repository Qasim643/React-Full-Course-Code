import  {React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Protected(){
    const {Component}=props;
    const navigate= useNavigate();
    useEffect(()=>
    {
        let login=localStorage.getItem('logmein');
        if(!login){
            navigate('/logmein')
        }
    });

    return(
        <div>
           
            <Component />
        </div>


    )
}

export default Protected;