import { useEffect } from "react";
const initialState = {
    products :[]
}
const [productsdata,setProducts] = React.useState() 
    console.log(productsdata);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((res)=>{
            setProducts([...res.data])
        })
    },[]) 
export const productsReducer =(state=initialState,actions)=>{
        
}
