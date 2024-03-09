const intialState = {
    newdata :[]
}
const loginpageReducer = (state=intialState,action)=>{
        if(action.type==='ADD'){
            return {...state,newdata:[...state,action.payload]}
        }
        return state
}
export default loginpageReducer