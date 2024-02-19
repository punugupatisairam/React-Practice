import React from "react";
function Operation(props){
    function del(){
    props.todo.splice(props.index,1)     
    }

return <div>
    <button onClick={()=>{del()}}>Delete</button>
    <button>Undo</button>
    <button>Done</button>
    <button>Edit</button>
</div>

    


}
export default Operation