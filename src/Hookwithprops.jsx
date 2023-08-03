import React from 'react'
function Hookwithprops(props)
{
  React.useEffect(()=>{
    alert("Use Effect Activated ")
  }, [props.count])

  return(
    <div className='app'>
      
      <h1>Data : {props.data}</h1>
      <h1>Count : {props.count}</h1>
    {/* <button onClick={()=>setdata(data+1)}>Update Data</button>
    <button onClick={()=>setcount(count+1)}>Update Count</button> */}
    </div>
  )
}

export default Hookwithprops;