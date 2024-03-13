import React from 'react'
import { connect } from 'react-redux'

function Todolist(props) {
    console.log(props);
    const [newtodo,setNewtodo] = React.useState()
    // console.log(newtodo);
  return (
    <div>
        <input type="text" onChange={(e)=>{setNewtodo(e.target.value)}}/>
        <button onClick={()=>{props.dispatch({type:'ADDTODO',payload:newtodo})}}>Add Task</button>

        {
            props.todolist.todos?.map((todo)=>{
                // console.log(todo);
                return <li>{todo}</li> 
            })
        }
    </div>
  )
}

export default connect(store=>store) (Todolist)