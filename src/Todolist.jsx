import React from 'react'

function Todolist() {
var [ar,setAr] = React.useState([])
var [NewTodo,setNewTodo] = React.useState()
function add(){
    setAr([...ar,NewTodo])
}
  return (
    <div>
        <input type="text" name="" onChange={(e)=>{(setNewTodo(e.target.value))}} />
        <button onClick={()=>{add()}}>Add Task</button>

        {
            ar.map((res)=>{
                return <li>{res}</li>
            })
        }
    </div>
  )
}

export default Todolist