// import { connect } from 'http2'
import React from 'react'
import { connect } from 'react-redux'

function Counter(props) {
    console.log(props);
  return (
    <div className='mystyle'>
        <h1>Counter : {props.counter.count}</h1>
        <button onClick={()=>{props.dispatch({type:'INCREMENT'})}}>Inc </button> &nbsp;&nbsp;
        <button onClick={()=>{props.dispatch({type:'DECREMENT'})}}>Dec </button> &nbsp;&nbsp;
        <button onClick={()=>{props.dispatch({type:'RESET'})}}>Reset </button> 
    </div>
  )
}

export default  connect((store)=>{ 
    return store 
})(Counter);