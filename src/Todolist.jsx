import React from 'react'
import { connect } from 'react-redux';


function Todolist(props) {
    var [newtodo,setNewtodo] = React.useState()
    function updateTodo(e){
        setNewtodo(e.target.value)
    }
    console.log(props);
  return (
    <div className='App'>
        <h1>My TodoList</h1>
        <input type="text" onChange={(event)=>{updateTodo(event)}} />
        <button onClick={()=>{props.dispatch({type:"ADDTODO",payload:newtodo})}}>Add Todo</button>

        { 
            props.alltodos.map((todo,i)=>{
                return <div>
                         <span>{ todo.title}
                         <button onClick={()=>{props.dispatch({type:"DELETE",payload:i})}}>Delete</button>
                         <button onClick={()=>{props.dispatch({type:'DONE',payload:i})}}>Done</button>
                         </span> <br />
                        </div>

            })
        }
    </div>
  )
}

export default connect (store=>store) (Todolist)