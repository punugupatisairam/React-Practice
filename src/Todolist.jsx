import React from "react";
function Todo(){
    var [ar,setAR] = React.useState([])

    function add(){
    var newitem = document.getElementById('inp').value
    setAR([...ar,newitem])
    }

    return <div>
        <input type="text" id="inp" />
        <button onClick={()=>{add()}}>Add task</button>
        {
            ar.map((e)=>{
                return <h1>{e}</h1>
            })
        }
    </div>
}
export default Todo 