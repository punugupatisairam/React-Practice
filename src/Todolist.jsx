import React from 'react'
import { connect } from 'react-redux'
import { actionaddtodo, actionupdatetodo } from './store/actions/action';


function Todolist(props) {
    console.log(props);
    // const [newtodo,setNewtodo] = React.useState()
    // console.log(newtodo);
  return (
    <div>
        <input type="text" onChange={(e)=>{props.updatetodo(e)}}/>
        <button onClick={()=>{props.addtodo()}}>Add Task</button>

        {
            props.todos?.map((todo)=>{
                // console.log(todo);
                return <li>{todo}</li>  
            })
        }
    </div>
  )
}
function mapstatetoprops(state){return state.todolist}
function mapdispatchtoprops(dispatch){
  return  {
    updatetodo:(e)=>{dispatch(actionupdatetodo(e))}, 
  addtodo:()=>{dispatch(actionaddtodo())},
}
}
export default connect(mapstatetoprops,mapdispatchtoprops) (Todolist)  