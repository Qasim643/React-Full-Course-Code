import React from "react";
class Student_class extends React.Component{
    render()
    {
        return(
            <div>
            <h4>Name: {this.props.name}</h4>
            <h5>Email: {this.props.email}</h5>
            </div>



        )
    }
}

export default Student_class;