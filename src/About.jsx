import React from "react";
import { Link } from "react-router-dom";
function About(){
    return(
        <div>
            <h1>This is a About Page :</h1>


             {/* For Link and Anchor Concept in React ====================== */}
             <p>This is React Router Course </p>
            <p>To be Honest React is fully interesting Course to learn  </p>
            <Link to="/">Wanna Go To Home </Link>
            {/* For Link and Anchor Concept in React ====================== */}
        </div>


    )
}

export default About;