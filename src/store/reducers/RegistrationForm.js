const initialState = {
     newar :[] 

}
const regReducer=function (state=initialState,action){
    if(action.type==='add'){
        return {...state,newar:[...state.newar,action.payload]}
    }
    return state

}
export default regReducer