 
import React, { useRef } from "react";
import Operation from "./Operation";
function Todo(){
    var [todoitems,setTODOITEMS] = React.useState([])
    var [x,setX] = React.useState('')
    const addtodo = ()=>{
        setTODOITEMS([...todoitems,x])
    }
    function delbtn(index){
    var temp = [...todoitems]
    temp.splice(index,1)
    setTODOITEMS([...temp])
    }
    return <div className="todo">
        <input className="inp"  class="form-control" type="text" onKeyUp={(e)=>{ setX(e.target.value)}} placeholder="Enter Your Todo's" /> <br />
        <button  class="form-control bg-warning "  onClick={()=>{addtodo()}}>Add Item</button>
 
        <ul>
            {
                todoitems.map((todo,i)=>{
                    return <Operation todo={todo} index={i} delbtn={delbtn} ></Operation>
                })
            }
        </ul>
    </div>
}
export default Todo
