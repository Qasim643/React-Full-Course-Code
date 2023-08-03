import React, {forwardRef} from "react";
function Forwardref(props,ref){
    return(
        <div className="Forwardref">
            <input type="text" ref={ref}/>

        </div>
    )
}
export default forwardRef(Forwardref);