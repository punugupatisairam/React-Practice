import React from "react";
function Counter() {
    var [c,setC] = React.useState(0)

    const inc = ()=>{
        setC(c+1)
    }
    const dec = ()=>{
       setC(c-1)
    }
    function reset() {
        setC(0)
    }
    return (
        <div>
            <h1>Counter :{c}</h1>
            <button onClick={()=>{inc()}}>Increment</button>
            <button onClick={()=>{dec()}}>Decrement</button>
            <button onClick={()=>{reset()}}>reset</button>
            
        </div>
    )
    
}



export default Counter