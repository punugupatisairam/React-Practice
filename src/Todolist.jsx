import React from "react";
function Todolist (){
    var [ar,setAr] = React.useState([])
    var [x,setX] = React.useState('')
    const additem= ()=>{
        setAr([...ar,x])
    }
    console.log(ar);
    return (<div style={{marginTop:'20px',border:'2px solid',padding:'70px'}}>

            <h1>Add Your Todo Tasks</h1><br />
            <input type="text" onKeyUp={(e)=>{setX(e.target.value)}} />
            <button onClick={()=>{additem()}}>Add Items</button>

            <ul>
                {
                    ar.map((item)=>{
                        return <li style={{listStyle:'none'}}>{item}</li>
                    })
                }
            </ul>

           </div>)
}export default Todolist 