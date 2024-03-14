import { allproducts } from "./productsdata"
const intialState = {
    products:allproducts.products.map((item)=>{return{...item,inCart:false}}),
    addcart:[]
}
const productsReducer = function(state=intialState,action){
    if(action.type==="ADD"){
        state.products[action.payload].inCart=true; 
        state.addcart.push({...state.products[action.payload],quantity:1}) 
        return {...state,addcart:[...state.addcart],products:[...state.products]}  
    } 
    if(action.type==='INCREMENT'){
        state.addcart[action.payload].quantity++
        return {...state,addcart:[...state.addcart]}
    }
    if(action.type==='DECREMENT'){
        state.addcart[action.payload].quantity--
        return {...state,addcart:[...state.addcart]}
    }
    return state 
}
export default productsReducer