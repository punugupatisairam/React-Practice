import React, { useEffect } from 'react'
import axios from 'axios';
import Newdata from './newdata';
import 'bootstrap/dist/css/bootstrap.min.css';



// import { table } from 'console';

function Productsdata() {
    var [items,setItems] = React.useState([])
    var [selecteditem,setSelecteditem] = React.useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((res)=>{
            // console.log(res.data
            setItems([...res.data])
           
        })
    },[])
    function additem(item){
      
            setSelecteditem([...selecteditem,item])
        }
    
  return (

    <div className='d-flex border border-2 '>
    <table border='2' className=' border border-2 w-75 mr-2'>
        {
           items?.map((item)=>{
            return (<tr onClick={()=>{additem(item) }} className='border border-2'>
                    <td className='border border-2'> <img src={item.image} alt="" /> </td>
                   <td  className='border border-2'>{item.title}</td> 
                   <td  className='border border-2'>{item.price}</td> 
                   <td  className='border border-2'>{item.rating.rate}</td> 
                   <td  className='border border-2'>{item.category}</td>
                
            </tr>)
           })  
        }
    </table>
    <div className='w-25 mr-2'>  
        <Newdata newdata={selecteditem}></Newdata>
    </div>
    </div>
    
  )
}

export default Productsdata