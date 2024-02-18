import React from "react";
function Todolist (){
    var [ar,setAr] = React.useState([])
    var [x,setX] = React.useState('')
    const additem= ()=>{
        setAr([...ar,x])
    }
    function del(index){
        ar.splice(index,1)
        setAr([...ar])
    }
    const y = React.useRef(null)
    console.log(ar);
    return (<div style={{marginTop:'20px',border:'2px solid',padding:'70px'}} className="rounded shadow">

            <h1>Add Your Todo Tasks</h1><br />
            <input type="text" ref={y} onKeyUp={(e)=>{setX(e.target.value)}} />
            <button onClick={()=>{additem()}}>Add Items</button>
            <ul>
                {
                    ar.map((item,index)=>{
                        return <li style={{listStyle:'none'}}>{item} 
                        <button onClick={()=>{del()}}>Delete</button>
                        </li>
                    })
                }
            </ul>
           </div>)
}export default Todolist  