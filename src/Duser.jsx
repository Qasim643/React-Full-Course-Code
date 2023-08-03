import React from "react";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom"
// import {withRouter} from "react-router-dom"
function Duser(props){
    console.log(prop.match.params.id)
    return(
        <div>
            <h1>This is the Duser Component Activated </h1>
        </div>
    )
}

export default Duser;