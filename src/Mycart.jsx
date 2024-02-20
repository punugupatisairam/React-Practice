import React from "react";
import axios from 'axios';
function Cart(){

    var [items,setItems] = React.useState([])                        
    React.useEffect(()=>{
        axios.get('https://dummyjson.com/carts').then((res)=>{
        console.log(res.data);
        setItems([...res.data.carts[0].products])

    })
    },[])
    function iteminc(item){
        var temp = [...items]
        temp=temp.map((titem)=>{
                if(titem.id==item.id){
                    titem.quantity=titem.quantity+1;
                    
                }
                return titem
        })
        setItems([...temp])
    }
    function itemdec(item) {
        var temp = [...items]
        temp=temp.map((titem)=>{
                if(titem.id==item.id){
                    titem.quantity=titem.quantity-1
                    
                }
                return titem
        })
        setItems([...temp])
    }
    return (<div className="cartblock">
        {
            items.map((item)=>{
                return <ol>
                    <li  className="itemlist">
                    <img style={{width:'100px'}} className="imgitem" src={item.thumbnail} alt="" />
                    <span className="itemTitle">{item.title}</span>
                    <span className="itemPrice">Price: { 'Rs.'+item.price}</span>
                    <div>
                        <button onClick={()=>{iteminc(item)}}> + </button>
                        <b >{item.quantity}</b>
                        <button onClick={()=>{itemdec(item)}}> - </button>
                    </div>
                    <b className="itemTotal">{'Total Rs.' +item.price*item.quantity}</b>
                   
                    </li>
                </ol>
                
            })
            
        }
        <h1 className="cartTotal">Total :{items.reduce((sum,item)=>{
            return sum + (item.quantity*item.price)

        },0)}</h1>

    </div>)
    
}
export default Cart 