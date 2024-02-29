import React from "react";
import { connect } from "react-redux";

function Todolist(props) {
  console.log(props);
  var [newtodo, setNewtodo] = React.useState();
  console.log(props);
  return (
    <div className="mystyle"> 
      <input type="text" onChange={(event) => {return setNewtodo(event.target.value);}}/>
      <button onClick={() => { props.dispatch({ type: "ADDTODO", payload: newtodo });}}>Add Todo</button>


      { props.todolist.todos.map((todo) => { 
        return ( 
          <div> 
            <span> 
              <span className={todo.status && 'strike'}>{todo.title}</span>    
              <button onClick={()=>{props.dispatch({type:"DELETE",payload:todo.title})}}>Delete</button> 
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
