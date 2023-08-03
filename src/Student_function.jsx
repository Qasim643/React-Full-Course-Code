import React from 'react';

function Student_function(props) {
    console.log(props)
  return (
    <div style={{backgroundColor:"gray"}}>
      <h1>Name: {props.name}</h1>
      <h2>Email: {props.email}</h2>
      <h3>Address: {props.others.address}</h3>
      <h4>Phone: {props.others.phone}</h4>
    </div>
  )
}

export default Student_function;