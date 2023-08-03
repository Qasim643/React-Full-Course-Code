import React, { useState, useTransition } from "react";
function Login(){
    const [userid, setuserid]=useState("")
    const [userpin, setuserpin]=useState("")
    const [error, seterror]=useState(false)
    const [errorpin, seterrorpin]=useState(false)
    function getlogin(e)
    {
        if(userid.length<3 && userpin.length<3)
        {
            alert("Please Enter Your Data To Login..")
        }
        else{
            alert("Successfully Login")
            // seterrorpin(false)
        }
        e.priventDefault()
    }
    function errorhandling(e)
    {
        let data=e.target.value;
        if(data.length<4)
        {
            seterror(true)
        }
        else{
            seterror(false)
        }
        setuserid(data)
    }
    function pinhandling(e)
    {
        let pine=e.target.value;
        if(pine.length<4)
        {
            seterrorpin(true)
        }
        else{
            seterrorpin(false)
        }
        seterrorpin(pine)
    }
    return(
        <div>
            <h3>Login</h3>
            <form onSubmit={getlogin}>
                <input type="text" placeholder="User ID" onChange={errorhandling}/> <br />
                {error?<span className="invalid">ID Not Valid</span>:""}
                 <br />
                <input type="password" placeholder="User Pin" onChange={pinhandling}/> <br />
                {errorpin?<span className="invalid">Invalid Pin</span> :" "}
                 <br />
                <br />
                <button>Login</button>


            </form>
        </div>
    )
}

export default Login;