import React from "react";
function Operation(props){
    
return (
 <div className="todomaindiv" >
    <div className="newtodoitem1">
    <span className="data"> {props.todo.title}</span>  &nbsp;&nbsp; 
    <span className="status"> {props.todo.status}Pending</span>

    </div >
    <div className="newtodoitem2" >
    <button className="buttonde" onClick={()=>{props.delbtn(props.index)}}>Delete</button>
    {/* <button className="buttonu">Undo</button> */}
    <button className="buttond" onClick={()=>{props.donebtn(props.todo)}}>Done</button>  
    <button className="buttone">Edit</button>
    </div>
    
</div>
)
}
export default Operation;