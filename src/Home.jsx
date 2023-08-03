import React from "react";
import { Link } from "react-router-dom";
function Home(){
    return(
        <div>
            <h1>This is a Home Page :</h1>
            

             {/* we can also create links here , i know this file is using twice now so no worry */}
            {/* For Link and Anchor Concept in React ====================== */}
            <p>This is React Router Course </p>
            <p>To be Honest React is fully interesting Course to learn  </p>
            <Link to="/about">Wanna Go To About </Link>
            {/* For Link and Anchor Concept in React ====================== */}
            
        
        </div>
        


    )
}

export default Home;