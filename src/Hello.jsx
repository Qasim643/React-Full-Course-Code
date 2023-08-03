import React from "react";
class Hello extends React.Component{
  componentWillUnmount(){
    alert("component will unmount now ")
  }
  render(){
    return(
      <h1>component is present</h1>
    )
  }
}

export default Hello;