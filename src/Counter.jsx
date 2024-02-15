import React from "react";
function Counter(){
    var [c,setC] = React.useState(0);
    const inc = ()=>{
        setC(c+1)
    }
    const dec = ()=>{
        setC(c-1)
    }
    const reset = ()=>{
        setC(0)
    }
    return <div className="border border-black p-5">
            <h2>Counter : {c}</h2>
            <button onClick={()=>{inc()}}>Increment</button>
            <button onClick={()=>{dec()}}>Decrement</button>
            <button onClick={()=>{reset()}}>Reset</button>
           </div>
}
export default Counter