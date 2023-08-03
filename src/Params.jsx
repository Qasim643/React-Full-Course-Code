import React from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Params() {
    const params=useParams();
    const {name}= params
    let data= {name};
  const student = [
    { Name: 'Qasim', Age: 22, Semester: 6 },
    { Name: 'Asim', Age: 22, Semester: 8 },
    { Name: 'Ali', Age: 20, Semester: 2 },
  ];

  return (
    <div>
      <h1>This is {name}'s Page</h1>
      
      <Table>
        <tbody>
          <tr>
            <td>Serial No</td>
            <td>Name</td>
            <td>Age</td>
            <td>Semester</td>
          </tr>
          {student.map((item,i) => (
            <tr key={i}> 
            <td>{i+1}</td>
              <td>{item.Name}</td>
              <td>{item.Age}</td>
              <td>{item.Semester}</td>
              
            </tr>
           
        
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Params;