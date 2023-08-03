// import React,{Component} from 'react';
import { Component, createRef, useEffect, useMemo, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// ===============================================================================================================

// functional component
// function App() {
//   const [count, setCount] = useState(0)
//   let name="Qasim"
//   function Apple(){
//     name="Asim"
//     return(
//       alert(name)
//     );
//   }
//   return (
//     <>
//       <div>

//         <h1>{name}</h1>

//         <button onClick={Apple}>Click Me</button>
//       </div>
//           </>
//   )
// }

// export default App

// ===============================================================================================================

// functional components using state

// function App(){
//   const [data, setData]= useState("Qasim")
//   function dataupdate(){
//     setData("Asim");
//     alert(data)
//   }
//   return(
//     <div className='App'>
//       <h1>{data}</h1>
//       <button onClick={dataupdate}>Click Me</button>

//     </div>
//   )
// }

// export default App

// ===============================================================================================================

// Class Componet using state updateing state with example

// class App extends Component{

//   constructor()
//   {
//     super();
//     this.state={
//       data: 0
//     }
//   }
//   apple(){
//     this.setState( {data: this.state.data+1})
//   }
//   render()
//   {
//     return(
//       <div className='App'>
//         <h1>{this.state.data}</h1>
//         <button onClick={()=>this.apple()}>Click Me</button>
//       </div>
//     )
//   }
// }

// export default App

// ===============================================================================================================

// props in functional component
// using Student_function file

// import Student_function from './Student_function'
// function App(){
//   const [count1, setname1] = useState("Qasim")
//   const [count2, setname2] = useState("Asim")
//   const [count3, setname3] = useState("Ali")

//   return(
//     <div className='App'>
//       <h1>Student Properties</h1>
//       <Student_function name={count1} email="qasim@gmail.com" others={{address:"lhr",phone:"000"}} />
//       <button onClick={()=>{setname1("Qasim Boota")}}>Update Info</button>
//       <Student_function name={count2} email="asim@gmail.com" others={{address:"ISL",phone:"111"}}/>
//       <button onClick={()=>{setname2("Asim Boota")}}>Update Info</button>
//       <Student_function name={count3} email="ali@gmail.com" others={{address:"Kchr",phone:"222"}}/>
//       <button onClick={()=>{setname3("Ali Boota")}}>Update Info</button>
//     </div>
//   )
// }

// export default App;

// ===============================================================================================================

// Props in class components
// use Student_class file
// import Student_class from './Student_class'
// function App(){
//   const [count1, setname]=useState("Qasim")
//   const [count2, setemial]=useState("qasim@gamil.com")
//   return(
//     <div className='App'>
//       <h2>Hello Qasim</h2>
//       <Student_class name={count1} email={count2}/>
//       <button onClick={()=>{
//         setemial("qasimboota@gmail.com");
//         setname("Qasim Boota");
//         }}>Click Me</button>
//       {/* <button onClick={setemial=("qasimboota@gmail.com")}>Click Me</button> */}
//     </div>
//   )
// }

// export default App;

// ===============================================================================================================

// making input field and make function to get that value also make button

// function App() {
//   const [data, setdata] = useState(null);
//   const [print, setprint] = useState(false);

//   function getouput(val) {
//     console.warn(val.target.value);
//     setdata(val.target.value);
//   }

//   return (
//     <div className='App'>
//       <input type="text" onChange={getouput} />

//       <button onClick={()=>{setprint(true)}}>Show Input</button>
//     {
//       print?
//       <h4>Your Input is : {data} </h4>
//       :null
//     }

//     </div>
//   );
// }

// export default App;

// ===============================================================================================================

// show / hide text with two button
// function App(){
//   const [status, setstatus] =useState(false)
//   return(
//     <div className='App'>
//       {
//         status?
//         <h1>Hello Qasim</h1>
//         : null
//       }
//       <button onClick={()=>setstatus(false)}>Hide</button>
//       <button onClick={()=>setstatus(true)}>Show</button>
//     </div>
//   )
// }

// export default App;

// show / hide text with one button like toggle
// function App(){
//   const [status, setstatus]=useState(false)
//   return(
//     <div className='App'>
//       {
//       status?
//       <h1>Hello Qasim</h1>
//       :null
//       }
//       <button onClick={()=>setstatus(!status)}>Toggle</button>
//     </div>

//   )
// }

// export default App;

// ===============================================================================================================

// makeing a form and getting data from that form

// function App(){
//   const [name, setname]= useState("")
//   const [fname, setfname]=useState("")
//   const [age, setage]=useState(null)
//   const [tnc, settnc]=useState(false)
//   function getformdata(e){
//     console.warn(name,fname,age,tnc)
//     e.preventDefault()
//   }
//   return(
//     <div className='App'>
//       <h3>Enter Your Data</h3>
//       <form onSubmit={getformdata}>
//       <input type="text" placeholder='Your Name...' onChange={(e)=>setname(e.target.value)}/> <br /><br />
//       <input type="text" placeholder='Father Name...' onChange={(e)=>setfname(e.target.value)}/> <br /><br />
//       <span>Select Your Age</span><br /><br />
//       <select onChange={(e)=>setage(e.target.value)}>
//         <option>10-20</option>
//         <option>20-30</option>
//         <option>30-40</option>
//       </select><br /><br />
//       <input type="checkbox" onChange={(e)=>settnc(e.target.checked)}/> <span>Accept Terms & Conditions</span><br /><br />
//       <button>Submit Now</button>
//       </form>
//     </div>
//   )
// }

// export default App;

// ===============================================================================================================

// condition rendering and if else condition
// using file is Condtion_rendering_ifcondition
// import Condtion_rendering_ifcondition from './Condtion_rendering_ifcondition';
// function App()
// {
//   return(
//     <div className='App'>
//       <h1>Condition Rendering & if else Condition</h1>
//       <Condtion_rendering_ifcondition />
//     </div>
//   )
// }

// export default App;

// ===============================================================================================================
// Basic form Validations
// using file is : Login.jsx
// import Login from './Login';
// function App(){
//   return(
//     <div className='App'>
//       <h2>Basic Form Validations</h2>
//       <Login />
//     </div>
//   )
// }
// export default App;

// ===============================================================================================================
// Passing function as props /
// using User file
// import User from './User';
// function App()
// {
//   function something(){
//     alert("I am in App file now");
//   }
//   return(
//     <div>
//       <h1>This is App file </h1>
//       <User  data={something}/>
//     </div>
//   )
// }

// export default App;

// ===============================================================================================================
// constructor in class components  (Life Cycle Method)
// do not use Api in constructor

// import React from 'react'
// class App extends React.Component{
//   constructor()
//   {
//     super();
//     this.state={
//       name:"Qasim"
//     }
//   }
//   render(){
//     return(
//       <div>
//         <h1>Hello {this.state.name} </h1>
//       </div>

//     )
//   }

// }
// export default App;

// ===============================================================================================================
// Render life cycle in class components
// using file is :renderlc.jsx
// import React from 'react'
// import Renderlc from './Renderlc'
// function App(){
//   const [name,setName]=useState("Qasim")
//   return(
//     <div>
//       <h1>Hi i am in App.jsx</h1>
//       <Renderlc name={name}/>
//       <h1>{name}</h1>
//       <button onClick={()=>{
//         setName("Qasim Boota");
//         alert("Name is Updated");
//       }}>Update Name</button>
//     </div>
//   )
// }
// export default App;

// ==========================================================================================================
// ComponentDidMount life cycle in Class
// import React from 'react'
// class App extends React.Component{
//   constructor()
//   {
//     super();
//     this.state={
//       name:"Qasim"
//     }

//   }
//   componentDidMount()
//   {
//     console.log("this is componentdid mount  ");
//   }
//   render()
//   {
//     console.log("thsi is render");
//     return(
//       <div className='app'>
//         <h1>component did mount : {this.state.name}</h1>
//         <button onClick={()=>{this.setState({name:"Qasim Boota"})}}>Update state</button>
//       </div>
//     )
//   }
// }

// export default App;

// ===========================================================================================================
// Component did update in class components
// imp Note : do not update state in componentDidUpdate function without condition ok

// import React from 'react'
// class App extends React.Component{
//   constructor()
//   {
//     super();
//     this.state={
//       count:0
//     }

//   }
//   componentDidUpdate(preProps,preState,snapshot)
//   {

//     console.log("this is component did Update  ", preState.count,this.state.count)
//     // this.setState({count:this.state.count+1})                              remove condition and uncomment this line and see infinite loop
//     if(preState.count=== this.state.count)
//     {
//       alert("Now Previous and Current State are Same");
//     }
//   }
//   render()
//   {
//     // console.log("thsi is render");
//     return(
//       <div className='app'>
//         <h1>component did Update: {this.state.count}</h1>
//         {/* <button onClick={()=>{this.setState({name:"Qasim Boota"})}}>Update state</button> */}
//         <button onClick={()=>{this.setState({count:1})}}>Update Name</button>
//       </div>
//     )
//   }
// }

// export default App;

// =================================================================================================================================
// should component update life cycle in class component

// import React from 'react'
// class App extends React.Component{
//   constructor()
//   {
//     super();
//     this.state={
//       name:0
//     }

//   }
//   shouldComponentUpdate()
//   {
//     console.log("should component  update ", this.state.name);
//     if(this.state.name>=5 && this.state.name<10)
//     {
//       return true;
//     }

//   }
//   render()
//   {
//     console.log("thsi is render");
//     return(
//       <div className='app'>
//         <h1>should component update  : {this.state.name}</h1>
//         <button onClick={()=>{this.setState({name:this.state.name+1})}}>Update state</button>
//       </div>
//     )
//   }
// }

// export default App;

// =================================================================================================================================
                                                    // component will unmount  life cycle in class component
                                                    // using file is : Hello.jsx

// import React from 'react'
// import Hello from './Hello';
// class App extends React.Component{
//   constructor()
//   {
//     super();
//     this.state={
//       show:true
//     }

//   }
//   render()
//   {
//     return(
//       <div className='app'>
//       {
//         this.state.show? <Hello/> : <h1>component is removed</h1>
//       }
//       <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle state</button>
//       </div>
//     )
//   }
// }

// export default App;

// ==========================================================================================================
                                          // Hooks in Functional Components
// ==========================================================================================================

// import React from 'react'
// // import React,{useState} from './react';
// function App(){
//   const [data,setdata]= useState("Qasim")
//   return(
//     <div className='App'>
//       <h1>{data}</h1>
//       <button onClick={()=>setdata("Qasim Boota")}>Update Name</button>
//     </div>

//   )
// }
// export default App;

// ============================================================================================================
                                        // Hook : UseEffect without any condition

// import React from 'react'
// function App(){
//   const [count,setcount]=useState(0)
//   React.useEffect(()=>{
//     alert("UseEffect Activated!!!")
//   })
//   return(
//     <div className='app'>
//       <h1>Hello World {count}</h1>
//       <button onClick={()=>setcount(count+1)}>Update Count</button>
//     </div>
//   )
// }
// export default App;

// =============================================================================================================
                                      // Hook : UseEffect with Specific State and Props
                                      // with state and no file useing
// import React from 'react'
// function App()
// {
//   const [data,setdata]=useState(10)
//   const [count,setcount]=useState(100)

//   // React.useEffect(()=>{
//   //   alert("Use Effect Activated ")
//   // })
//   React.useEffect(()=>{
//     alert("Use Effect Activated : Data Updated ")
//   }, [data])
//   React.useEffect(()=>{
//     alert("Use Effect Activated : Count Updated ")
//   }, [count])
//   return(
//     <div className='app'>
//     <h1>Data : {data}</h1>
//     <h1>Count : {count}</h1>
//     <button onClick={()=>setdata(data+1)}>Update Data</button>
//     <button onClick={()=>setcount(count+1)}>Update Count</button>
//     </div>
//   )
// }

// export default App;

// file using is : Hookwithprops
// Hook : UseEffect with specific Props

// import React from 'react'
// import Hookwithprops from './Hookwithprops'
// function App()
// {
//   const [data,setdata]=useState(10)
//   const [count,setcount]=useState(100)

//   // React.useEffect(()=>{
//   //   alert("Use Effect Activated ")
//   // })

//   return(
//     <div className='app'>
//     <Hookwithprops data={data} count={count}/>
//     <button onClick={()=>setdata(data+1)}>Update Data</button>
//     <button onClick={()=>setcount(count+1)}>Update Count</button>
//     </div>
//   )
// }

// export default App;

// ==========================================================================================================
                                        // Styles Types  in React js
                                        // Type 1 using file is : Styletype.css  Inline css
// import React from 'react'
// import './Styletype.css'
// function App(){
//   return(
//     <div className='app'>
//       <h1 className='primary'>Style Type 1 </h1>
//     </div>
//   )
// }
// export default App;

// Type 2 using file is : No One
// import React from 'react'
// function App(){
//   return(
//     <div className='app'>
//       <h1 style={{backgroundColor:'red', color:'black'}}>Style Type 2 </h1>
//     </div>
//   )
// }
// export default App;

// Type 3 using file is : Custom.module.css
// Module css file

// import React from 'react'
// import style from './Custom.module.css'
// function App(){
//   return(
//     <div className='app'>
//       <h1 className={style.success}>Style Type 3 </h1>
//     </div>
//   )
// }
// export default App;

// ==========================================================================================================
                                              // Installation of Bootstrap
// import React from 'react'
// import { Button } from 'react-bootstrap'
// function App(){
//   return(
//     <div className='app'>
//       <h1>Bootstrap Installation </h1>
//       <button onClick={()=>alert("hello")}>Click Me</button>
//       <Button variant="primary">Primary</Button>{' '}
//       <Button variant="secondary">Secondary</Button>{' '}
//       <Button variant="success">Success</Button>{' '}
//       <Button variant="warning">Warning</Button>{' '}
//       <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
//       <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
//       <Button variant="link">Link</Button>
//     </div>
//   )
// }
// export default App;

// =============================================================================================================================
                                                            // Handle Array With List   Important Topic
// import React from 'react'
// function App(){
//   const student=['Qasim','Asim','Ali','Hamza']
//   // student.map((item)=>{
//   //   console.warn("In Map Function :",item)
//   // })
//   // for(let i=0;i<student.length;i++)
//   // {
//   //   console.warn("In For Loop :",student[i])
//   // }
//   return(
//   <div className='app'>
//   <h1>hello qasim</h1>
//   {
//     student.map((item)=>
//     <h1> {item}</h1>
//     )
//   }
//   </div>
//   );
// }
// export default App;

                                                              // Createing Table of list

// import React from 'react'
// function App(){
//   const student=[
//     {name:'Qasim',email:'qasim@test.com',contact:'444'},
//     {name:'Asim',email:'asim@test.com',contact:'466'},
//     {name:'Ali',email:'ali@test.com',contact:'445'},
//     {name:'Hamza',email:'hamza@test.com',contact:'333'},
//   ]

//   return(
//   <div className='app'>
//   <h1>hello qasim</h1>
//   <table border="1 ">
//   <tr>
//       <td>Name</td>
//       <td>Email</td>
//       <td>Contact</td>
//     </tr>
//   {
//     student.map((item)=>
//     <tr>
//       <td>{item.name}</td>
//       <td>{item.email}</td>
//       <td>{item.contact}</td>
//     </tr>
//     )
//   }
//   </table>
//   </div>
//   );
// }
// export default App;

// =====================================================================================================================================

                                                          // Nested List with Nested Array
                                                          // creating Table with high quality and nested array 

// import React from "react";
// import { Table } from "react-bootstrap";
// function App() {
//   const student = [
//     {
//       name: "Qasim",
//       email: "qasim@test.com",
//       address: [
//         { House_No: "12", City: "Lhr", Country: "Pakistan" },
//         { House_No: "22", City: "Khr", Country: "Pakistan" },
//         { House_No: "14", City: "Isl", Country: "Pakistan" },
//       ],
//     },
//     {
//       name: "Asim",
//       email: "asim@test.com",
//       address: [
//         { House_No: "122", City: "Lhr", Country: "Pakistan" },
//         { House_No: "242", City: "Khr", Country: "Pakistan" },
//         { House_No: "154", City: "Isl", Country: "Pakistan" },
//       ],
//     },
//     {
//       name: "Ali",
//       email: "ali@test.com",
//       address: [
//         { House_No: "1432", City: "Lhr", Country: "Pakistan" },
//         { House_No: "2332", City: "Khr", Country: "Pakistan" },
//         { House_No: "1324", City: "Isl", Country: "Pakistan" },
//       ],
//     },
//     {
//       name: "Hamza",
//       email: "hamza@test.com",
//       address: [
//         { House_No: "14342", City: "Lhr", Country: "Pakistan" },
//         { House_No: "25452", City: "Khr", Country: "Pakistan" },
//         { House_No: "14554", City: "Isl", Country: "Pakistan" },
//       ],
//     },
//   ];

//   return (
//     <div className="app">
//       <h1>List with Nested Array</h1>
//       <Table variant="dark" striped>
//         <tbody>
//           <tr>
//             <td>Serial No</td>
//             <td>Name</td>
//             <td>Email</td>
//             <td>Address</td>
//           </tr>
//           {student.map((item,i) => (
//             <tr key={i}>
//               <td>{i+1}</td>
//               <td>{item.name}</td>
//               <td>{item.email}</td>

//               <td>
//               <Table variant="dark" striped>
//               <tbody>
//                 {
//                   item.address.map((add)=>
//                   <tr>
//                   <td>{add.House_No}</td>
//                   <td>{add.City}</td>
//                   <td>{add.Country}</td>
//                   </tr>
//                   )}
//                   </tbody>
//                   </Table>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// }
// export default App;


// ====================================================================================================================================


// import React from 'react'
// import { Table } from "react-bootstrap";
// function App(){
//   const student=[
//     {name:'Qasim',email:'qasim@test.com',contact:'444'},
//     {name:'Asim',email:'asim@test.com',contact:'466'},
//     {name:'Ali',email:'ali@test.com',contact:'445'},
//     {name:'Hamza',email:'hamza@test.com',contact:'444'},
//   ]

//   return(
//   <div className='app'>
//     <h1>List with bootstrap table</h1>
//   <Table border="1 " striped variant="dark">
//     <tbody>
//   <tr>
//       <td>Serial No</td>
//       <td>Name</td>
//       <td>Email</td>
//       <td>Contact</td>
//     </tr>
//   {
//     student.map((item,i)=>
//     item.contact==='444'?
//     <tr key={i}>
//       <td>{i+1}</td>
//       <td>{item.name}</td>
//       <td>{item.email}</td>
//       <td>{item.contact}</td>
//     </tr>:null
//     )
//   }
//   </tbody>
//   </Table>
//   </div>
//   );
// }
// export default App;


// ===================================================================================================================================
                                                            // Reuse of Components 
                                                                // Use of Component in Map function 
                                                                // file using is : Reuse_Component 
// import React from "react";
// import Reuse_Component from "./Reuse_Component";
// function App(){
//     const student=[
//     {name:'Qasim',email:'qasim@test.com',contact:'444'},
//     {name:'Asim',email:'asim@test.com',contact:'466'},
//     {name:'Ali',email:'ali@test.com',contact:'445'},
//     {name:'Hamza',email:'hamza@test.com',contact:'444'},
//     ]
//     return(
//         <div>
//             <h1>Right Now In App Component</h1>
//             {student.map((item,i)=>
//                 <Reuse_Component data={item}/>
//             )}
//         </div>
        
            
        
//     );
// }
// export default App;

// =====================================================================================================================================
                                                                    // React Fragments  Advance Topic
                                                                    //  Using file name is : React_fragment 
// import React from "react";
// import React_fragment from "./React_fragment";
// function App(){
//     return(
//                     // 1st Method 
//         // <div>
//         //     <h1>React Fragements </h1>
//         // </div>
//                     // 2st Method 
//         // <React.Fragment>
//         //     <h1>React Fragements </h1>
//         // </React.Fragment>
//                     // 3st Method 
//         // <>
//         // <h1>React Fragements </h1>
//         // </>


//         <React.Fragment>
//             <h1>
//                 React Fragment 
//             </h1>
//             <table>
//                 <tbody>
//                     <tr>
//                     <React_fragment />  
//                     </tr>
//                 </tbody>
//             </table>
//         </React.Fragment>
//     )
// }
// export default App;


// ==============================================================================================================
                            // Lifting state Up / passing data between parent and child 
                                // From parent to Childern 
                                // using file name is ; Child 
    
// import React from "react";
// import Child from "./Child";
// function App(){
//     let name='Qasim Boota'
//     return(
//         <div>
//             <h4>Lifting State Up / passing data between parent and child</h4>
//             <Child data={name}/>
//         </div>
//     )
// }

// export default App;


                                // From child to parent 


// import React from "react";
// import Child from "./Child";
// function App(){
//     function parentfun(){
//         alert(data)
//     }

//     return(
//         <div>
//             <h4>Lifting State Up / passing data between parent and child</h4>
//             <Child alerting={parentfun}/>
//         </div>
//     )
// }

// export default App;

// =========================================================================================================

                                                // Pure Component  Use only in Class Component 
                                                // stop to rerendering the page
                                                // if state remain same then pureComponent stop rerendering 
                                                // this code stop rerendering in state 
// import React from "react";        
// class App extends React.PureComponent{
//     constructor(){
//         super();
//         this.state={
//             count:1, 
//         };
//     }
//     render()
//     {
//         console.warn("check rerendering ...")
//         return(
//             <div>
//                 <h1>Pure Component : {this.state.count}</h1>
//                 <button
//                  onClick={()=>this.setState({count:this.state.count})}>
//                  Click Me</button>
//             </div>

//         );
//     }
// }
// export default App;


                                    // this code stop rerendering in props 
                                    // using file name is : Count.jsx 

// import React from "react";     
// import Count from "./Count";   
// class App extends React.PureComponent{
//     constructor(){
//         super();
//         this.state={
//             count:1, 
//         };
//     }
//     render()
//     {
//         console.warn("check rerendering ...")
//         return(
//             <div>
//                 <Count count={this.state.count}/>
//                 <button
//                  onClick={()=>this.setState({count:this.state.count})}>
//                  Click Me</button>
//             </div>

//         );
//     }
// }
// export default App;


// ==============================================================================================================
                                            // useMemo  Hook in React js 

// import React from "react";
// // import React,{useState} from "react";
// function App()
// {
//     const [count,setcount]=useState(0)
//     const [item,setitem]=useState(10)
   
//     let memoexample=useMemo( function muticount(){
//         alert('multicount exicuting..')
//         return count*5
//     },[count])
//     return(
//         <div className="app">
//             <h1>useMemo Hook in React Js</h1>
//             <h1>Count : {count}</h1>
//             <h1>Item : {item}</h1>
//             <h2>{memoexample}</h2>
//             <button onClick={()=>setcount(count+1)}>Update Count</button>
//             <button onClick={()=>setitem(item*10)}>Update Item</button>
//         </div>
//     )
// }
// export default App;


// ====================================================================================================================/
                                        // Ref in React Js 
                                        // use Ref kam sy kam (DOM ko Direct Manipulate karta ha ya)
                                        // use only in emergency (instruction by react js itself)

// import React from "react";
// class App extends React.Component{
//    constructor(){
//     super();
//     this.inputref=createRef();
//    } 
//    componentDidMount(){
//     alert("Component is Mounted")
//    }
//    getval(){
//     console.warn(this.inputref.current.value)
//     this.inputref.current.style.color="white"
//     this.inputref.current.style.backgroundColor="blue"
//    }
//     render()
//     {
//         return(
         
//             <div className='app'>
//                 <h1>Ref In React Js</h1>
//                 <input type="text" ref={this.inputref} />
//                 <button onClick={()=>this.getval()}>Click Me</button>
//             </div>
          
            
//         )
//     }
// }

// export default App; 



// ==================================================================================================================================
                                                //( Hook ) UseRef  in React JS 
                                                // Functional Component
// import React from "react";
// function App(){
//     let inputref=createRef();
//     function handle(){
//         console.log("handle function called")
//         // inputref.current.value="Your Name..."
//         // inputref.current.focus();
//         inputref.current.style.display="none"

//     }
//     return(
//         <div className="app">
//             <h2>Hook UseRef in React jS</h2>
//             <input type="text" ref={inputref}/> <br /><br />
//             <button onClick={handle}>Handle Ref</button>
//         </div>
//     )
// }
// export default App;


// ======================================================================================================================================
                                                // Forward Ref in React Js
                                                // Using file is Forwardref 
                                
// import React from "react";
// import Forwardref from "./Forwardref";
// function App(){
//     let inputref=createRef(null);
//     function updation()
//     {
//         inputref.current.value="1000"
//         inputref.current.style.color="pink"
//         inputref.current.style.backgroundColor="black"
//         inputref.current.focus();
//     }
//     return(
//         <div className="app">
//             <h1>Forward Ref In React JS</h1>
//             <Forwardref ref={inputref}/>
//             <br />
//             <button onDoubleClick={updation}>Update Input Box</button>

//         </div>
//     )
// }
// export default App;



// ==================================================================================================================
                                            // Controlled Component In React JS
                                            // Handling the values of Input Feilds with states 
            
// import React from "react";
// function App(){
//     const [name,setname]=useState("Your Name");
//     const [fname,setfname]=useState("Your Father Name");
//     return(
//         <div className="app" style={{display:"grid"}}>
//             <h1>Controlled Component In React Js</h1>
//             <br />
//             <input type="text" onClick={()=>setname("")} value={name} onChange={(e)=>setname(e.target.value)}/>
//             <h3>Name: {name}</h3>
//             <br />
//             <input type="text" onClick={()=>setfname("")} value={fname} onChange={(e)=>setfname(e.target.value)}/>
//             <h3>Father Name : {fname}</h3>

//         </div>
//     ) 

// }
                            
// export default App;


// =============================================================================================================================
                                            // Uncontrolled Component In React JS
                                            // Must : Handling the values of Input Feilds without states 
                                            // Can control by direactly javscript 
                                            // can be controlled by Ref & direct Javascript


// import React from "react";
// function App(){
//     let inputrefn=useRef();
//     let inputreffn=useRef();
//     function submition(e){
//         e.preventDefault();
//         // console.warn("Your Name Using Ref :", inputrefn.current.value)
//         // console.warn("Your Father Name Using Ref :", inputreffn.current.value)
//         let age=document.getElementById('age').value;
//         // console.warn("Your Age Using Direct Javascript :", age)
//         alert(`Age: ${age}\nName: ${inputrefn.current.value}\nFather's Name: ${inputreffn.current.value}`)
//     }
//     return(
//         <div className="app">
//             <h2>Uncontrolled Component In React JS</h2>
//             <form onSubmit={submition}>
//                 <input ref={inputrefn} type="text" placeholder="Name" /> <br /> <br />
//                 <input ref={inputreffn} type="text" placeholder="Father Name" /> <br /> <br />
//                 <input id="age" type="number" placeholder="Age" /> <br /> <br />
//                 <button>Submit</button>
//             </form>

//         </div>
//     )
// }

// export default App;


// =======================================================================================================================================
                                                    // Simple HOC 
                                                    // Stand for: High Order Component
                                                    // 1 component jo input or output dono hi kisi or component ko ly 

// import React from "react";
// function App(){
//     return(
//         <div className="app">
//             <h2>Simple HOC (High Order Component)</h2>
//             <HOCred cmp={Counter} />
//             <HOCblack cmp={Counter} />
//             <HOCpink cmp={Counter} />
//         </div>
//     );
// }

// function HOCred(props)
// {
//     return <h4 style={{
//     color:"Pink",
//     backgroundColor:"red"
//     }}>Red<props.cmp/></h4>
// }

// function HOCblack(props)
// {
//     return <h4 style={{
//     color:"Pink",
//     backgroundColor:"black"
//     }}>Black<props.cmp/></h4>
// }

// function HOCpink(props)
// {
//     return <h4 style={{
//     color:"black",
//     backgroundColor:"pink"
//     }}>Pink<props.cmp/></h4>
// }

// function Counter()
// {
//     const [count, setCount]=useState(0);
//     return(
//         <div>
//             <h3>{count}</h3>
//             <br />
//             <button onClick={()=>setCount(count+1)}>Update Me</button>
//         </div>
//     );
// }

// export default App;




// =============================================================================================================================
//                                          React Router DOM V6 
// =============================================================================================================================

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// function App()
// {
//     return(
//         <div className="app">
//          {/* <h1>helo </h1>   */}
//             <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<h1>This is React Routing V6</h1>} />
//                 <Route path="/home" element={<Home />} />
//                 <Route path="/about" element={<About />} />
//             </Routes>
//             </BrowserRouter>
//         </div>
//     )
// }

// export default App;


// ======================================================================================================================
                                            // Link and Anchor Tag 
                                            // Using files : Home & About 

// import React from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// function App()
// {
//     return(
//         <div className="app">
//             <BrowserRouter>
//             <Link to="/about" className="link">About</Link>
//             <Link to="/" className="link">Home</Link>
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/about" element={<About />} />

                    
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     );
// }

// export default App;


// ------------------------------      2nd Example of links using          --------------------------------------


// import React from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Navbar from "./Navbar";
// function App()
// {
//     return(
//         <div className="app">
//             <BrowserRouter>
//                 <Navbar />
//                 {/* Remember that if you remove this Navbar component from BrowserRouter then it will not work  */}
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/about" element={<About />} />

                    
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     );
// }

// export default App;


// =================================================================================================================
                                        // 404 Page and redirecting the page 
                                            // Using file : Page404.jsx 
// import React from "react";
// import Page404 from './Page404'
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// function App(){
//     return(
//         <div className="app"> 
//         <h1>Hello Qasim </h1>
//         <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<h2>How are you Qasim</h2>}/>
//             {/* <Route path="/*" element={<Page404/>}/> */}
//             <Route path="/*" element={<Navigate to="/"/>}/>
//         </Routes>
//         </BrowserRouter>
//         </div>
//     )
// }


// export default App;



// =================================================================================================================
                                    // Params in React Routing 
                                    // using file : Params & Gohome 
                    
// import React from "react";
// import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
// import Params from "./Params";
// import Gohome from "./Gohome";
// function App(){
//     return(
//         <div className="app">
            
//             <h2>This is params in React Routing</h2>
//             <BrowserRouter>
//             <Link to="/home">GoHome</Link> <br />
//             <Link to="/params/qasim">Qasim</Link><br />
//             <Link to="/params/asim">Asim</Link> <br />
//             <Link to="/params/ali">Ali</Link>
//             <Routes>
//                 <Route path="/home" element={<Gohome />}/>   
//                 <Route path="/params/:name" element={<Params />} />
//             </Routes>
//             </BrowserRouter>
//         </div>
//     )
// }

// export default App;



// ======================================================================================================================
                                            // Link and Nav Link styling 
                                            // Creating Navbar with styles 
                                            
// import React from "react"; 
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function NavScrollExample() {
//     return (
//     <Navbar bg="light" expand="lg">
//         <Container fluid>
//         <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//             <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//             >
//             <Nav.Link href="#action1">Home</Nav.Link>
//             <Nav.Link href="#action2">Link</Nav.Link>
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//                 <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action4">
//                 Another action
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action5">
//                 Something else here
//                 </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#" disabled>
//                 Link
//             </Nav.Link>
//             </Nav>
//             <Form className="d-flex">
//             <Form.Control
//                 type="search"
//                 placeholder="Search"
//                 className="me-2"
//                 aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//             </Form>
//         </Navbar.Collapse>
//         </Container>
//     </Navbar>
//     );
// }

// export default NavScrollExample;

// ================================================================================================================
                                            // Activating the Buttons on Navbar

// import React from "react"; 
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function NavScrollExample() {
//     return (
//     <Navbar bg="light" expand="lg">
//         <Container fluid>
//         <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//             <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//             >
//             <Nav.Link 
//             // style={({isActive})=>{return {backgroundColor: isActive ? 'green' :'red'}}}
//             >Home</Nav.Link>
//             <Nav.Link href="#action2">Link</Nav.Link>
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//                 <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action4">
//                 Another action
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action5">
//                 Something else here
//                 </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#" disabled>
//                 Link
//             </Nav.Link>
//             </Nav>
//             <Form className="d-flex">
//             <Form.Control
//                 type="search"
//                 placeholder="Search"
//                 className="me-2"
//                 aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//             </Form>
//         </Navbar.Collapse>
//         </Container>
//     </Navbar>
//     );
// }

// export default NavScrollExample;


// ====================================================================================================================================
                                            // Search Param Hook in React Js 
                                            // using file is : Navbar , Filter 

// import React from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Navbar from "./Navbar";
// import Filter from "./Filter";
// function App()
// {
//     return(
//         <div className="app">
//             <BrowserRouter>
//                 <Navbar />
//                 <br />
//                 <br />
//                 <Filter />
//             </BrowserRouter>
//         </div>
//     );
// }

// export default App;



// ==========================================================================================================================
                            // Navigation on click 
                            // 3 methods we use in it 
                            // file useing : Params.jsx 
                                        // Gohome.jsx    3 methods written in it 
                                        // About.jsx 



// import React from "react";
// import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
// import Params from "./Params";
// import Gohome from "./Gohome";
// import About from "./About";
// function App(){
//     return(
//         <div className="app">
            
//             <h2>This is params in React Routing</h2>
//             <BrowserRouter>
//             <Link to="/home">GoHome</Link> 
//             <Link to="/about">Aboutme</Link> <br />
//             <Link to="/contact">Contact</Link> <br />
//             <Link to="/params/qasim">Qasim</Link><br />
//             <Link to="/params/asim">Asim</Link> <br />
//             <Link to="/params/ali">Ali</Link>
//             <Routes>
//                 <Route path="/home" element={<Gohome />}/>
//                 <Route path="/about" element={<About/>}/>
//                

//                 <Route path="/params/:name" element={<Params />} />
//             </Routes>
//             </BrowserRouter>
//         </div>
//     )
// }

// export default App;



// =======================================================================================================================================================
                                    // Nested Routing with example 
                                    // new using files: Contact, Channel, Company and Other  
                                    // previous file : params , Gohome, about

// import React from "react";
// import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
// import Params from "./Params";
// import Gohome from "./Gohome";
// import Contact from "./Contact";
// import About from "./About";
// import Channel from "./Channel";
// import Company from "./Company";
// import Other from "./Other";

// function App(){
//     return(
//         <div className="app">
            
//             <h2>This is params in React Routing</h2>
//             <BrowserRouter>
//             <Link to="/home">GoHome</Link> 
//             <Link to="/about">Aboutme</Link> 
//             <Link to="/contact">Contact</Link> <br />
    
//             <Routes>
//                 <Route path="/home" element={<Gohome />}/>
//                 <Route path="/about" element={<About/>}/>
// {/*  for nested Routing loook the method  */}

//                 <Route path="/contact" element={<Contact/>}>
//                     <Route path="channel" element={<Channel/>}/>
//                     <Route path="company" element={<Company/>}/>
//                     <Route path="other" element={<Other/>}/>
                    
//                 </Route>

//                 <Route path="/params/:name" element={<Params />} />
//             </Routes>
//             </BrowserRouter>
//         </div>
//     )
// }

// export default App;



// ===============================================================================================================================
                                // useLocation React Routing hook 
                                // code id : uselocation in react routing 
                                // file : Gohome , Other
                                // use console with inspect to see results 



// import React from "react";
// import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
// import Params from "./Params";
// import Gohome from "./Gohome";
// import Contact from "./Contact";
// import About from "./About";
// import Channel from "./Channel";
// import Company from "./Company";
// import Other from "./Other";

// function App(){
//     return(
//         <div className="app">
            
//             <h2>This is params in React Routing</h2>
//             <BrowserRouter>
//             <Link to="/home">GoHome</Link> 
//             <Link to="/about">Aboutme</Link> 
//             <Link to="/contact">Contact</Link> <br />
    
//             <Routes>
//                 <Route path="/home" element={<Gohome />}/>
//                 <Route path="/about" element={<About/>}/>
// {/*  for nested Routing loook the method  */}

//                 <Route path="/contact" element={<Contact/>}>
//                     <Route path="channel" element={<Channel/>}/>
//                     <Route path="company" element={<Company/>}/>
//                     <Route path="other" element={<Other/>}/>
                    
//                 </Route>

//                 <Route path="/params/:name" element={<Params />} />
//             </Routes>
//             </BrowserRouter>
//         </div>
//     )
// }

// export default App;



// =================================================================================================================================

// import React from "react";
// import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
// import Params from "./Params";
// import Gohome from "./Gohome";
// import Contact from "./Contact";
// import About from "./About";
// import Channel from "./Channel";
// import Company from "./Company";
// import Other from "./Other";
// import Logmein from "./Logmein";
// import Protected from "./Protected";

// function App(){
//     return(
//         <div className="app">
            
//             <h2>This is params in React Routing</h2>
//             <BrowserRouter>
//             <Link to="/home">GoHome</Link> 
//             <Link to="/about">Aboutme</Link> 
//             <Link to="/contact">Contact</Link>
//             <Link to="/logmein">Logmein</Link> 
//             <br />
            
//             <Routes>
//                 <Route path="/gohome" element={<Protected Component={Gohome} />}/>
//                 <Route path="/about" element={<About/>}/>
//                 <Route path="/logmein" element={<Logmein />}/>
// {/*  for nested Routing loook the method  */}

//                 <Route path="/contact" element={<Contact/>}>
//                     <Route path="channel" element={<Channel/>}/>
//                     <Route path="company" element={<Company/>}/>
//                     <Route path="other" element={<Other/>}/>
                    
//                 </Route>

//                 <Route path="/params/:name" element={<Params />} />
//             </Routes>
//             </BrowserRouter>
//         </div>
//     )
// }

// export default App;










// ======================================================================================================================================
                                        // After React Routing =>  404 page 
// ========================================================================================================================================

// import React from "react";
// import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

// function App() {
//   return (
//     <div className="app">
//       <Router>
//         <nav>
//           <Link to="/" exact={true}>ABC</Link>
//           <Link to="/def">DEF</Link>
//           <Link to="/login">Login</Link>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Abc />} />
//           <Route path="/def" element={<Def />} />
//           <Route path="*" element={<Pagenotfound/>}></Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// function Abc(){
//     return(
//         <div className="app">
//          <h1>This is ABC page</h1>
//          <p>Hello this is Abc page!!!</p>
//         </div>
//     )
// }

// function Def(){
//     return(
//         <div className="app">
//          <h1>This is DEF page</h1>
//          <p>Hello this is Def page!!!</p>
//         </div>
//     )
// }

// function Pagenotfound(){
//     return(
//         <div className="app">
//         <h1>404 Page</h1>
//          <h1>This is Pagenotfound page</h1>
//          <p>Hello this is Pagenotfound page!!!</p>
//         </div>
//     )
// }



// export default App;


// =====================================================================================================================================================
                    // Dynamic Routing in React Routing 
                    // using file is : Duser


// import React from "react";
// import Duser from "./Duser";
// import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom"
// function App(){
//     let users=
//     [
//         {id:1,name:'Bruce',email:'bruce123@gmail.com'},
//         {id:2,name:'Jarvis',email:'jarvis123@gmail.com'},
//         {id:3,name:'Steave',email:'steave123@gmail.com'},
//         {id:4,name:'Jhonus',email:'jhonus123@gmail.com'},
//         {id:5,name:'David',email:'david123@gmail.com'}
//     ]
//     return(
//         <div className="app">
//             <Router>
//                 <h1>Dynamic Routing in React </h1>

//                 {
//                     users.map((item)=>
//                     <Link to={"/users/"+item.id+"/"+item.name}> <h3>{item.name}</h3></Link>
//                     )
//                 }
//                 <Routes>
//                 <Route path="/users/:id/:name" element={<Duser/>} ></Route>
//                 </Routes>
//             </Router>
//         </div> 
//     )
// }

// export default App;



// ================================================================================================================================
                        // Api Fecting data with react file App.jsx 
                        // website to get api link is : json placeholder 
                        // in this code we just get and show all the data of Api in table form 
// ===================================================================================================================================





// function App() {
//   const [users,setUser]=useState([])
//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/posts").then((result)=>{
//       result.json().then((resp)=>{
//         // console.warn(resp)
//         setUser(resp)
//       })
//     })
//   },[])
//   console.warn(users)
//   return (
//     <div className="App">
//       <h1>Get API Call </h1>
//       <table border="1">
//        <tbody>
//        <tr>
//             <td>UserId</td>
//             <td>Id</td>
//             <td>Title</td>
//             <td>Body</td>
//         </tr>
//         {
//           users.map((item,i)=>
//             <tr key={i}>
//             <td>{item.userId}</td>
//             <td>{item.id}</td>
//             <td>{item.title}</td>
//             <td>{item.body}</td>
//             </tr>
//           )
//         }
//        </tbody>
//       </table>
//     </div>
//   );
// }
// export default App;

   
// ===========================================================================================================
                        // posting the data from a form to api in react with coding
                          // and also we can only seee results in network of inspect element 


// function App(){
//   const [userId, setUserId] =useState("");
//   const [title,  setTitle] =useState("");
//   const [body, setBody] =useState("");
//   function saveUser(){
//     // console.log(userId,title,body);
//     // alert(userId,title,body);
//     let udata={userId,title,body};
//     fetch("https://jsonplaceholder.typicode.com/posts",{
//       method:'POST',
//       headers:{
//         'Accept':'application/json',
//         'Content-Type':'application/json'
//       },
//       body:JSON.stringify(udata)
//     }).then((result)=>{
//       // console.warn("Result is :", result);
//       result.json().then((resp)=>{
//         console.warn("Resp",resp) 

//       })
//     })
//   }
 
//   return(
//     <div>
//       <h1>We are Posting Data from Form to our API OK</h1>
//       <br />
//       <input type="text" value={userId} onChange={(e)=>{setUserId(e.target.value)}} name="userid"  /> <br /> <br />
//       <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}   name="title"  /> <br /> <br />
//       <input type="text" value={body} onChange={(e)=>{setBody(e.target.value)}} name="body"  /> <br /> <br />
//       <button onClick={saveUser} >Save User Data</button>
//       <br />
      
//     </div>
//   )
// }



// export default App;


// ==================================================================================================
                          // Deleting  the data from a form with button to api in react with coding
                          // and also we can only seee results in network of inspect element 

// function App(){
//   const [userId, setUserId] =useState("");
//   const [title,  setTitle] =useState("");
//   const [body, setBody] =useState("");
//   function saveUser(){
//     // console.log(userId,title,body);
//     // alert(userId,title,body);
//     const udata={userId,title,body};
    
//     viewlist();
    
  
//   }
//   function viewlist(){
//     const udata={userId,title,body};
//     fetch("https://jsonplaceholder.typicode.com/posts",{
//       method:'POST',
//       headers:{
//         'Accept':'application/json',
//         'Content-Type':'application/json'
//       },
//       body:JSON.stringify(udata)
//     }).then((result)=>{
//       // console.warn("Result is :", result);
//       result.json().then((resp)=>{
//         console.warn("Resp",resp) 
       

//       })
//     })
//   }
//   function deluser(userId){
//     // alert(userId)
//     fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`,{
//       method:'DELETE'
//     }).then((rest)=>{
//       rest.json().then((re)=>{
//         console.log(re)
//       })
//     })
//   }
//   return(
//     <div>
//       <h1>We are Posting Data from Form to our API OK</h1>
//       <br />
//       <input type="text" value={userId} onChange={(e)=>{setUserId(e.target.value)}} name="userid"  /> <br /> <br />
//       <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}   name="title"  /> <br /> <br />
//       <input type="text" value={body} onChange={(e)=>{setBody(e.target.value)}} name="body"  /> <br /> <br />
//       <button onClick={saveUser} >Save User Data</button>
//       <br />
//       <button onClick={()=>deluser(userId)} >Delete User</button>
//     </div>
//   )
// }



// export default App;


// =============================================================================================================================
                    // handling previous  value 

// function App(){
//   const [count,setCount] =useState(1)
//   function updateCounter(){
//     // let rand=Math.floor(Math.random()*20)
//     // setCount((pre)=>{
//     //   console.warn(pre)
//     //   if(pre<5){
//     //     alert("Previous Value is less then : 5=> ",pre)
//     //   }
//     //   return rand;
//     // })


//     for(let i=0;i<5;i++)
//     {
//       setCount((pre)=>
//       {
//         return pre+1
//       })
//     }
//   }
//   return(

//     <div>
//       <h1>Handling previous state in React </h1> <br />
//       <h3>{count}</h3>
//       <button onClick={updateCounter}>Update value of count</button>
//     </div>
//   )
// }

// export default App;


// =============================================================================================================================
                    // handling previous  porps in react 

// import PreviousProps from './PreviousProps';

// function App(){
//   const [count,setCount] =useState(1)



// return(

//       <div>
//         <h1>Handling previous props in React </h1> <br />
//         <PreviousProps count={count}/>
//         <button onClick={()=>setCount(Math.floor(Math.random()*10))}>Update value of counter</button>
//       </div>
//     )
//   }
  
// export default App;






// =========================================================================================================================




function App(){
  const [data,setData] =useState({name:'Qaism',age:27})



return(

      <div>
        <h1>State Object with hooks</h1> <br />
        <input type="text" value={data.name} onChange={(e)=>{setData({name:e.target.value})}}/>
        <input type="text" value={data.age} onChange={(e)=>{setData({name:e.target.value})}}/>

      <h2>{data.name}</h2>
      <h2>{data.age}</h2>
      </div>
    )
  }
  
export default App;