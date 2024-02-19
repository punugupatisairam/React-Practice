import React from "react";
function Counter() {
    var [c,setC] = React.useState(0)
    function inc(){
        setC(c+1)
    }
    function dec(){
        setC(c-1)
    }
    return <div className="border border-warning border-2 p-25">
        <div>Counter : <span>{c}</span> </div>
        <button onClick={()=>{inc()}}>Increment</button>
        <button onClick={()=>{dec()}}>Decrement</button>
    </div>
}
export default Counter