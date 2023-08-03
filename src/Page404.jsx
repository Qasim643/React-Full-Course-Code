import React from "react";
import { Link } from "react-router-dom";
function Page404()
{
    return(
        <div>
            <h1>404 Page </h1>
            <h4>Incorrect URL </h4>
            <Link to="/">Go to Home</Link>
        </div>
    )
}

export default Page404;
