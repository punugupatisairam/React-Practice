import React, { useRef } from "react";
import Operation from "./Operation";
function Todo(){
    var [todoitems,setTODOITEMS] = React.useState([])
    var [x,setX] = React.useState('')
    const addtodo = ()=>{
        setTODOITEMS([...todoitems,x])
    }
    return <div className="todo">
        <input type="text" name="" id="" onKeyUp={(e)=>{ setX(e.target.value)}} />
        <button onClick={()=>{addtodo()}}>Add Item</button>

        <ul>
            {
                todoitems.map((a,i)=>{
                    return <Operation any={a} index={i} todo={todoitems}></Operation>
                })
            }
        </ul>
    </div>
}
export default Todo
