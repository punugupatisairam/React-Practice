import React from "react";
function Operation(props){
    
return <div className="m-2 border-rounded border border-info h-20 w-15"  >
    {props.todo} &nbsp;&nbsp;
    <button onClick={()=>{props.delbtn(props.index)}}>Delete</button>
    <button>Undo</button>
    <button>Done</button>
    <button>Edit</button>
</div>
}
export default (Operation)