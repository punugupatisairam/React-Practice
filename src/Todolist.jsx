import React from 'react'
import { connect } from 'react-redux'

function Todolist(props){
    var [newtodo,setNewtodo] = React.useState([])
    console.log(newtodo);
  return (
    <div>
        <input type="text" onChange={(event)=>{setNewtodo(event.target.value)}} />
        <button onClick={()=>{props.dispatch({type:'ADD',payload:newtodo})}}>Add Task</button> <br />

        {
            props.todolist.alltodos?.map((todo,i)=>{
                return (<div class='mt-2'>
                            <span key={i} >{todo} &nbsp;
                            <button class='rounded' onClick={()=>{props.dispatch({type:'DELETE',payload:i})}}>Delete</button> 
                            <button class='rounded' onClick={()=>{props.dispatch({type:'DONE',payload:i})}}>Done</button>
                            </span> <br />
                        </div>) 
            })
        }
    </div>
  )
}

export default connect(state=>({todolist:state.todolist})) (Todolist)