import React from "react";
function Score(x){
    var [c,setC] = React.useState(x.start)
  
    function inc() {
        setC( c+x.inc)
    }
    function dec() {
        setC(c-1)
    }
    return (
        <div>
            
                <h1>{x.tname}: {c}</h1>
                <button onClick={()=>{inc()}}> Increment</button>
                <button onClick={()=>{dec()}}> Decrement</button>
            
        </div>
    )
}
export default Score