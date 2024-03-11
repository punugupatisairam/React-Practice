import { connect } from 'react-redux';
import React from 'react'

function Counter(props) {

console.log(props);
  return (
    <div>
        <h1>Counter : <span>{props.counter.count}</span> </h1>
        <button onClick={()=>{props.dispatch({type:'INCREMENT'})}}>Increment</button> &nbsp;
        <button onClick={()=>{props.dispatch({type:'DECREMENT'})}}>Decrement</button> &nbsp;
        <button onClick={()=>{props.dispatch({type:'RESET'})}}>Reset</button>
    </div>
  )
}

export default connect(state=>({counter:state.counter})) (Counter)