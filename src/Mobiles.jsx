import axios from 'axios'
import React from 'react'
import { useEffect } from 'react' 

function Mobiles() {
    const [products,setProducts] = React.useState([])
    const [newproducts,setNewproducts] = React.useState({title:'',designer:''})
    // console.log(products);
    useEffect(()=>{
        getproducts()
       
    },[])
    function addproduct(){
        // alert(JSON.stringify(newproducts))
        axios.post("http://localhost:4000/mobiles",newproducts).then((res)=>{
            getproducts()

        })
    }
    function getproducts(){
        axios.get("http://localhost:4000/mobiles").then((res)=>{ 
            setProducts([...res.data]) 
        }).catch(()=>{})
    }
    function deletemobile(id){
        axios.delete("http://localhost:4000/mobiles/"+id).then(()=>{
            getproducts()
        })
       
    }
    function editmobile(){
            
    }
  return (
    <div className='m-5 p-3 text-center'> 
        <input type="text" name="" placeholder='enter title' onChange={(event)=>{setNewproducts({...newproducts,title:event.target.value})}}/> <br />
        <input type="text" name="" placeholder='enter designer' onChange={(event)=>{setNewproducts({...newproducts,designer:event.target.value})}}/>  
        <button onClick={addproduct}>Add New</button> <br /> 
        <div className='d-flex flex-wrap border '> 
        {
            products?.map((product)=>{ 
                console.log(product);
                return <div className='border border-2  m-5 p-5 w-20 '> 
                        <span>{product.id}. {product.title} </span>  <br />
                        <span>&nbsp; {product.designer.toUpperCase()}</span>  <br /><br />
                        <button className='btn btn-warning rounded' onClick={()=>{deletemobile(product.id)}}>Delete</button>
                        <button className='btn btn-primary rounded' onClick={()=>{editmobile()}}>Edit</button>
                </div>
            })
        }
        </div>
    </div>
  )
}

export default Mobiles