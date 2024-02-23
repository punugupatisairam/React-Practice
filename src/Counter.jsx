import React from 'react'

function Counter() {
    var [count,setCount] = React.useState(0)
    function inc() {
        setCount(count+1)
    }
    function dec() {
        setCount(count-1)
    }
  return (
    
    <div>
        <span>Counter :{count} </span>
        <button onClick={()=>{inc()}}>Incerment</button>
        <button onClick={()=>{dec()}}>Decerment</button>
    </div>
  )
}

export default Counter