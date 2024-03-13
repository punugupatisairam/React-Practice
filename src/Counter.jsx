import React from 'react'
import { connect } from 'react-redux'
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css'

function Counter(props) {
    console.log(props);

  return (
    <div>
        <h1>Counter :{props.count}</h1> 
        <button class='btn btn-primary m-2 p-2' onClick={()=>{props.dispatch({type:'INCREMENT'})}}>Increment</button>
        <button class='btn btn-danger m-2 p-2' onClick={()=>{props.dispatch({type:'DECREMENT'})}}>Decerment</button> 
        <button class='btn btn-warning m-2 p-2' onClick={()=>{props.dispatch({type:'RESET'})}}>Reset</button>
    </div>
  )
}
function mapstatetoprops(state){return state.counter}
function mapdispatchtoprops(dispatch){return {dispatch:dispatch}}
export default connect(mapstatetoprops,mapdispatchtoprops) (Counter)