import React from "react";
function Operation(props){
    
return (
 <div className="todomaindiv" >
    <div className="newtodoitem1">
    <span className="data"> {props.todo}</span>  &nbsp;&nbsp; 
    <span className="status">Pending</span>

    </div >
    <div className="newtodoitem2" >
    <button className="buttonde" onClick={()=>{props.delbtn(props.index)}}>Delete</button>
    {/* <button className="buttonu">Undo</button> */}
    <button className="buttond" onClick={()=>{props.donebtn()}}>Done</button>
    <button className="buttone">Edit</button>
    </div>
    
</div>
)
}
export default Operation;