const intialstate = {
    newarr : []
}

const loginReducer = (state=intialstate,action)=>{
        if(action.type==='add'){
            return {...state,newarr:[...state.newarr,action.payload]}
        }
        return state
}
export default loginReducer
