

const initialState ={
    todos :[]
    ,
    newtodo:''
}
const todoReducer = (state=initialState,action)=>{
    if(action.type==='ADDTODO')
    return {...state,todos:[...state.todos,state.newtodo]}
    if(action.type==='NEWTODO'){
        return {...state,newtodo:action.payload}
    }
     return state
}

export default todoReducer
