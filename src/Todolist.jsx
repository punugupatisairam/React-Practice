import React, { useRef } from "react";
function Todo(){
    var [todoitems,setTODOITEMS] = React.useState([])
    var [x,setX] = React.useState('')
    const addtodo = ()=>{
        setTODOITEMS([...todoitems,x])
    }
    return <div>
        <input type="text" name="" id="" onKeyUp={(e)=>{ setX(e.target.value)}} />
        <button onClick={()=>{addtodo()}}>Add Item</button>

        <ul>
            {
                todoitems.map((a)=>{
                    return <li>{a}</li>
                })
            }
        </ul>
    </div>
}
export default Todo
