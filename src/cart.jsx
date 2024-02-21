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
                        <div>
                            <span>{product.product.title} - {product.product.quantity}</span>&nbsp;&nbsp;
                            {/* <button><span>-</span></button>{product.product.quantity}<button><span>+</span></button> */}
                        </div>
                        
                    </>
                    
                    
                )
            })
        }
        </>
    )
}
export default Cart