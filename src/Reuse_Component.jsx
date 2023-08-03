function Reuse_Component(props){
    return(
        <div>
        <span>{props.data.name}</span>
        <span>{props.data.email}</span>
        <button onClick={()=>alert("Hello")}>{props.data.contact}</button>
        </div>
    )
}
export default Reuse_Component;