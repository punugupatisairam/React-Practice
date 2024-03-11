import { allproducts } from "./productsdata"
const intialState = {
    products:[...allproducts.products],
    addcart:[]
}
const productsReducer = function(state=intialState,action){
    if(action.type==="ADD"){
        return {...state,addcart:[...state.addcart,action.payload]}
    }
    return state 
}
export default productsReducer