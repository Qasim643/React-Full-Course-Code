import React from "react";
import { Link, Outlet } from "react-router-dom";


function Contact(){
    return(
        <div className="contac">
            <h1>This is Contact Page </h1>
            <h3>Here are some links for your nested routing </h3>

            <Link to="channel">Channel</Link>
            <Link to="company">Company</Link>
            <Link to="other">Other</Link>
            <Outlet/>
        </div>



    )
}


export default Contact;