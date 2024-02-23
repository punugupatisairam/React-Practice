 
import React, { useRef } from "react";
import Operation from "./Operation";
import Header from "./Headertodo";
function Todo(){
    var [todoitems,setTODOITEMS] = React.useState([])
    var [x,setX] = React.useState('')
    const addtodo = ()=>{

        var newobj ={
            title:document.getElementById('inp').value,
            status:false,
        }
        setTODOITEMS([...todoitems,newobj]) 
    }
    function delbtn(index){
    var temp = [...todoitems]
    temp.splice(index,1)
    setTODOITEMS([...temp])
    }

    function donebtn(ele){
        var temp = [...todoitems]
        temp=temp.map((item)=>{
            if(item.newobj.status===false){
                item.newobj.status=true
            }
            else
            {
                item.newobj.status=false  
            }
            return item 

        })
        console.log()

        setTODOITEMS([...temp])
    }
    return <div className="todo">
        <Header ar={todoitems}/> 
        <h1 className="addtodotext" >📝 Add Your Todo's : 📝 </h1>
        <div className="inpdiv">
        <input className="inp"  class="form-control " type="text" id="inp" placeholder="Enter Your Todo's" /> <br />
        <button  class="form-control bg-warning "  onClick={()=>{addtodo()}}>Add Item</button>
        <h1 className="newtodotext">All Your Todo's :</h1>
        </div>
        <ul>
            {
                todoitems.map((todo,i)=>{
                    return <Operation todo={todo} index={i} delbtn={delbtn} donebtn={donebtn} ></Operation>
                })
            }
        </ul>
    </div>
}
export default Todo
