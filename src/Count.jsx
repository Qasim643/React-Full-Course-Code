import React from "react";
import { PureComponent } from "react";        
class Count extends React.Component{
    render()
    {
        console.warn(" Count Component check rerendering ...")
        return(
            <div>
                <h1>Count Component {this.props.count}</h1>
        
            </div>

        );
    }
}
export default Count;