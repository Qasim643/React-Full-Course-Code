import React, {useEffect,useRef} from "react";

function PreviousProps(props){
    const  lastVal=useRef();
    useEffect(()=>{
        lastVal.current=props.count
    })
    const previousProps=lastVal.current
    return(
        <div>
            <h1>current Value: {props.count}</h1>
            <h2>Previous value {previousProps}</h2>
        </div>

    )
}

export default PreviousProps;