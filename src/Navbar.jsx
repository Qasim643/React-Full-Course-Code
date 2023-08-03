import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
function Navbar()
{
    return(
        <div className="nav">
            
            <Link to="/" className="link">Home</Link>
            <Link to="/about" className="link">About</Link>
            <Link to="/contact us" className="link">Contact Us</Link>
            <Link to="/exit" className="link">Exit</Link>
            <Link to="/filer" className="link">Filer</Link>

            {/* Now see Anchor Tag working : it load this page which react do not allow */}
            {/* <a href="/" className="link">Home</a> */}
            {/* <a href="/about" className="link">About</a> */}
        </div>
    )
}
export default Navbar;