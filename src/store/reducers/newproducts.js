import { allproducts } from "./newproductsdata"
const intialState = {
    newproducts:[...allproducts.products]
}
const newproductsReducer = function(state=intialState,action){
    return state
}
export default newproductsReducer