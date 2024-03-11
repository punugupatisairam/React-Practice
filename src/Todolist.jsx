import React from "react";
import { connect } from "react-redux";

function Todolist(props) {
  console.log(props);
  var [newtodo, setNewtodo] = React.useState();
  var [filterTodo,setFilterTodo] = React.useState(null)
  console.log(props);
  function updatefilter(e){
    // setFilterTodo(e.target.value)
    props.dispatch({type:e.target.value});
  }
  return (
    <div className="mystyle"> 
      <input type="text" onChange={(event) => {return setNewtodo(event.target.value);}}/>
      <button onClick={() => { props.dispatch({ type: "ADDTODO", payload: newtodo });}}>Add Todo</button><br />
      
      <input type="radio" name='filter' value='All' onChange={(event)=>updatefilter(event)} />:All Todos
      <input type="radio" name='filter' value='DONE'  onChange={(event)=>updatefilter(event)} />:Completed
      <input type="radio" name='filter' value='NOTDONE'  onChange={(event)=>updatefilter(event)} />:Pending


      { props.todolist.filteredTodos?.map((todo,i) => { 
        return ( 
          <div> 
            <span> 
              <span style={{textDecoration:todo.status && 'line-through' }}>{todo.title}</span>    
              <button onClick={()=>{props.dispatch({type:"DELETE",payload:i})}}>Delete</button> 
              <button onClick={()=>{props.dispatch({type:"DONE",payload:todo.title})}}>Done</button> 
            </span>
          </div> 
        );
      })
      }
    </div>
  );
}

export default connect((store) => store)(Todolist);
