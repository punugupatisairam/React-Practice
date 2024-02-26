import React from "react";
function Cart({additem}){
    console.log(additem);
    
    
    return(
        <>
        <h1>welcome to Kart</h1>
        
            {
            additem.map(product=>{
                return(
                    <>
                        {console.log("welcome to kart", product)}
                        <div className="border border-2 w-10 h-20">
                        <span> <img src={product.product.image} alt="" /></span> <br />
                            <span>{product.product.title} &nbsp;  Qauntity :{product.product.quantity}</span>&nbsp;&nbsp;<br />
                            <span>Price :{product.product.price * product.product.quantity}</span> &nbsp; 
		                <span>rating :{product.product.rating.rate}</span><br />
                            {/* <button><span>-</span></button>{product.product.quantity}<button><span>+</span></button> */}
                        </div>             
                       
                    </>
                    
                    
                )
            }) 
        }
         <h1>Total : { additem?.reduce((sum,item)=>{
            return sum+(item.quantity*item.price)
         },0)} </h1>
        </>
    )
}
export default Cart