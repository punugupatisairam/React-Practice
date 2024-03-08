import React, { useRef } from "react";
import Operation from "./Operation";
import Header from "./Headertodo";
// import { log } from "console";

function Todo(){
    // document.getElementById('update').innerHTML='Add Item'
    
    var [todoitems,setTODOITEMS] = React.useState([]);
    var [action, setAction] = React.useState('Add Item');
    var [operatingId, setOperatingId] = React.useState()

    const addtodo = ()=>{
        var newobj = {
            title:document.getElementById('inp').value,
            status:false,
        }
        setTODOITEMS([...todoitems,newobj]) 
    }

    function statusDone(index){
        let temp = [...todoitems]; 
        
        const statuschangeitem  = temp.map((item,i) => { 
            // console.log(index,i);
            if((index === i) && item.status === false){ 
                return {...item, status:true}
                
                // return item.status=true;
            }
            else{
                
                return {...item, status:false} 
                // return item.status=false;
            }
        });
        setTODOITEMS([...statuschangeitem]);
    }

    const update = (index) => {

        let temp = todoitems.filter((item, ind) => index !== ind ); 
        const edittedItem = todoitems.find((item, ind) => index === ind)
        edittedItem.title= document.getElementById('inp').value;
        setTODOITEMS([edittedItem, ...temp])
        setAction('Add Item')
    }

    function editTitle(index){
        setAction('Update')
        setOperatingId(index)
        let temp = [...todoitems]; 
            temp.map((item,i) => {
            if(index === i ) {
                document.getElementById('inp').value = item.title;
                // document.getElementById('additem').innerHTML='update'  
                // document.getElementById('update').style.display='inline-display'
                
            }  
            else
            {
                // item.title=document.getElementById('inp').value ; 
                // document.getElementById('additem').innerHTML='Add Item'
                // document.getElementById('update').style.display='none'
                // document.getElementById('additem').style.display='inline-block'

                // document.getElementById('update').innerHTML='Add Item'
               
            }
        });
        
        // setTODOITEMS([...statuschangeitems]);
    }
    function delbtn(index){
    var temp = [...todoitems]
    temp.splice(index,1)
    setTODOITEMS([...temp]) 
    }
    console.log(todoitems);

    return ( 
    <div className="todo">
        <Header ar={todoitems}  /> 
        <h1 className="addtodotext" >📝 Add Your Todo's : 📝 </h1>
        <div className="inpdiv">
        <input className="inp"  class="form-control " type="text" id="inp" placeholder="Enter Your Todo's" /> <br />
        <button  class="form-control bg-warning " id="additem" onClick={()=>{action === 'Update' ? update(operatingId) : addtodo()}}>{action}</button>
        
        {/* <button  class="form-control bg-warning " id="update" onClick={()=>{addtodo()}}>Update</button> */}
        <h1 className="newtodotext">All Your Todo's :</h1>
        </div>
        <ul>
            {
                todoitems.map((todo,i)=>{
                    return <Operation todo={todo} index={i} delbtn={delbtn} donebtn={statusDone} editbtn={editTitle} ></Operation>
                })
            }
        </ul>
    </div>
    )
}
export default Todo
