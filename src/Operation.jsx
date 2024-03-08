import React from "react";

function Operation(props){  

return (
 <div className="todomaindiv" >
    <div className="newtodoitem1">
    <span className="data"> {props.todo.title}</span>  &nbsp;&nbsp; 
    <span className="status"> {props.todo.status?<i class="bi bi-check-square"></i>:('Pending')}</span>
    

    </div >
    <div className="newtodoitem2" >
    <button className="buttonde" onClick={()=>{props.delbtn(props.index)}}>Delete</button>
    {props.todo.status?(<button className="buttond" onClick={()=>{props.donebtn(props.index)}}>Undo</button>):(<button className="buttond" onClick={()=>{props.donebtn(props.index)}}>Done</button>)}
    <button className="buttone" onClick={()=>{props.editbtn(props.index)}}>Edit</button>
    </div>
    
</div>
)
}
export default Operation;