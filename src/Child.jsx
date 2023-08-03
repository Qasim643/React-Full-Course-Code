import React from "react";
                                            // From Parent to child 
// function Child(props){
//     return(
//         <div>
//         <h1>Child Name : {props.data}</h1>
//         <button>Click Me</button>
//         </div>
//     )   
// }
// export default Child;


                                                // From Child to parent

function Child(props){
    let data='Qasim Boota'
    return(
        <div>
            <h1>User Name :{data} </h1>
        <button onClick={()=>alert(data)}>Click Me</button>
        </div>
    )   
}
export default Child;