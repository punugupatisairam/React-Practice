import React from "react";
function Counter() {
    var [c,setC] = React.useState(0)

    const inc = ()=>{
        setC(c+1)
        document.getElementById('dd').style.display='block'
        setTimeout(()=>{
            document.getElementById('dd').style.display='none'
        },2000)

    }
    const dec = ()=>{
       setC(c-1)
       document.getElementById('de').style.display='block'
        setTimeout(()=>{
            document.getElementById('de').style.display='none'
        },2000)


    }
    function reset() {
        setC(0)
    }
    // React.useEffect(()=>{
    //     document.getElementById('dd').style.display='block'
    //     setTimeout(()=>{
    //         document.getElementById('dd').style.display='none'
    //     },2000)

    // })
    // React.useEffect(()=>{
    //     document.getElementById('dd').style.display='none'
    // },[])


    return (
        <div className="">
            <h1>Counter :{c}</h1>
            <button onClick={()=>{inc()}}>Increment</button>
            <button onClick={()=>{dec()}}>Decrement</button>
            <button onClick={()=>{reset()}}>reset</button>
            <div id="dd">
                <h1>Increment</h1>
            </div>
            <div id="de">
                <h1>Decrement</h1>
            </div>
        </div>
    )
    
    }
export default Counter